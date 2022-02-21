<!--
 * @Author: 周梦茹
 * @Date: 2021-12-13 10:33:23
 * @LastEditors: 周梦茹
 * @LastEditTime: 2021-12-13 11:19:53
 * @Description: 首页
 * @FilePath: \animation\src\views\Home.vue
-->
<template>
  <div class="home">
    <div class="home-content">
      <a class="title">Come recuperare un sito web dalla cache di Chrome</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  .home-content {
    width: 50%;
    height: 500px;
    a {
      background-size: 10px 2px;
      transition: background-size 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      background-image: radial-gradient(
        circle farthest-corner at 10% 20%,
        #03ebff 0,
        #9846f2 100.2%
      );
      background-repeat: no-repeat;
      background-position: left 90%;
      padding-bottom: 5px;
    }
    a:hover {
      background-size: 100% 4px;
    }
  }
}
</style>
