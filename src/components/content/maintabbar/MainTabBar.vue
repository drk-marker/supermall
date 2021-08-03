<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <!-- 此处的路径用了build/webpack.base.conf.js中的路径别名,import的后面可以直接使用，但是一般src之类(DOM里)的要在地址前面加~ -->
      <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/images/tabbar/home_active.svg"
        alt=""
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/images/tabbar/category.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/images/tabbar/category_active.svg"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/images/tabbar/shopcart.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/images/tabbar/shopcart_active.svg"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/images/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="item-text">档案</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  name: "MainTarBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>