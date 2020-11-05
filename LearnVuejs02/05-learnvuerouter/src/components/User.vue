<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户相关信息，嘿嘿嘿</p>
    <h2>{{userId}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "User",
    computeds: {
      userId() {
        return this.$route.params.userId
      }
    },
    methods: {
      btnClick() {
        // console.log(this.$router);
        // console.log(this.$route);
      }
    },
    
    created() {
      console.log('user created');
    },
    destroyed() {
      console.log('user destroyed');
    }
  }
</script>

<style scoped>

</style>
