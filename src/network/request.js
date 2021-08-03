import axios from 'axios'
// 因为可能不止导出一个所以此处不用default,里面对axios做一个封装
export function request(config) {

    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: "http://123.207.32.32:8000",
        timeout: 5000
    })
    //2.axios的拦截器
    //对全局请求拦截，第一个参数是成功时的箭头函数，第二个是失败时的，参数都是箭头函数
    // 请求拦截
    instance.interceptors.request.use(config => {
        // console.log(config);
        // 拦截了会做的事（拦截的作用）
        //1.比如config一些信息不符合服务器的要求，对信息做一些转化
        //2.比如每次发送网络请求时，都希望在界面显示一个请求的图标，比如说请求还没完成时，页面显示一个圆圈再转，请求成功了再隐藏
        //3.某些网络请求（比如登陆(token)），必须携带一些特殊的信息，判断是否有token信息，如果没有则提示马上登陆

        // 一定要返回出去，否则内部发送请求的时候config就拿不到了
        return config
        // 基本都会发送出去，所以一般不存在请求失败
    }, err => {
        console.log(err);
    })
    //响应拦截
    instance.interceptors.response.use(res => {
        // 响应此处拿的是结果，而上面拿的是config配置
        // console.log(res);
        // 如果不返回main的request拿不到res
        return res.data
    }, err => {
        console.log(err);
    });
    //3.发送真正的网络请求，instance(config)本身返回的就是promise
    return instance(config)

}

