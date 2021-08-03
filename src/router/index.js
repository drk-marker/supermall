import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 1.安装插件
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
},
{
    path: '/home',
    component: Home
},
{
    path: '/category',
    component: Category
},
{
    path: '/cart',
    component: Cart
},
{
    path: '/profile',
    component: Profile
},]
// 2.创建router
const router = new VueRouter({
    routes,
    mode: 'history'
})

// 3.导出,然后去main.js里去挂载
export default router