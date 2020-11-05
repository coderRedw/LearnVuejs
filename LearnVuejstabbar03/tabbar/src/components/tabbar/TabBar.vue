<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>

  #tab-bar .tab-bar-item {
    flex: 1;
    height: 49px;
  }

</style>
