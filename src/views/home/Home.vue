<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 因为这个组件(Swiper)只在home所以抽取在home里就很好 -->
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView";

// 只有default导出才能把大括号删掉
import { getHomeMultidata } from "network/home";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    RecommendView,
  },
  // created里面的this就是当前组件对象
  created() {
    // 请求多个数据
    getHomeMultidata().then((res) => {
      // 函数里变量在函数执行过后被回收的原因是，执行过后指向具体数据的变量res会被回收，然后res指向data的指针也就不存在，然后data也就会被当成垃圾回收，但是res在回收之前，先把data的地址给到result，所以res回收但是result是一直存在的
      // this.result = res.data;
      // console.log(this.result);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
    // 此处打印大概率是空，因为上面是异步，不一定会直接返回结果，而此处是同步会直接执行
    // console.log(this.result);
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>