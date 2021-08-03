<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  border-bottom: 10px solid #eee;
  padding-bottom: 20px;
}
.recommend > div {
  flex: 1;
}
.recommend div a {
  display: inline-block;
  padding: 5px;
}
.recommend img {
  width: 100%;
  margin: 10px 0;
}
</style>