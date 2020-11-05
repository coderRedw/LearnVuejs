<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="tab-bar-icon"></slot></div>
    <div v-else><slot name="tab-bar-icon-active"></slot></div>
    <div :style="isActiveColor"><slot  name="tab-bar-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      isActiveColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      },
      // /home -> item1(/home) =true
      // /home -> item1(/category) =false
      // /home -> item1(/profile) =false
      // /home -> item1(/cart) =false

      isActive() {
        return this.$route.path.indexOf(this.path) != -1
      }
    },
    computed: {
      isActiveColor() {
        return this.isActive ? {color: this.isActiveColor} : {}
      }
    }
  }
</script>

<style scoped>

  #tab-bar .tab-bar-item img {
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }
  .active {
    color: #f00;
  }
</style>
