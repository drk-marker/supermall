<template>
  <!-- 因为多个地方都有导航，id这种可能会有重复，所以用class='nav-bar'，
  像tabbar这种不会改变的可以用id -->
  <div class="nav-bar">
    <div class="left">
      <!-- 不要直接用slot而是要用div包起来，直接给div布局也就是给slot布局 -->
      <!-- 具名插槽加上name -->
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  /* 直接line-hight就可以撑起来高度,但是要先设置内容，否则要加高度 */
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>