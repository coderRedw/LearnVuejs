<template>
  <router-view></router-view>
  <tab-bar>
    <tab-bar-item path="/home" isActiveColor="red">
      <img slot="tab-bar-icon" src="~assets/img/tabbar/home.jpg" alt="">
      <img slot="tab-bar-icon-active" src="~assets/img/tabbar/home.active.jpeg" alt="">
      <div slot="tab-bar-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" isActiveColor="red">
      <img slot="tab-bar-icon" src="../../assets/img/tabbar/category.jpeg" alt="">
      <img slot="tab-bar-icon-active" src="../../assets/img/tabbar/category.active.jpeg" alt="">
      <div slot="tab-bar-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" isActiveColor="red">
      <img slot="tab-bar-icon" src="../../assets/img/tabbar/cart.png" alt="">
      <img slot="tab-bar-icon-active" src="../../assets/img/tabbar/cart.active.png" alt="">
      <div slot="tab-bar-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" isActiveColor="red">
      <img slot="tab-bar-icon" src="../../assets/img/tabbar/profile.png" alt="">
      <img slot="tab-bar-icon-active" src="../../assets/img/tabbar/profile.active.png" alt="">
      <div slot="tab-bar-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/tabbar/TabBar";
  import TabBarItem from "components/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
