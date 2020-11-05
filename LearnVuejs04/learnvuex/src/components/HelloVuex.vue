<template>
<div>
    <h2>{{$store.state.counter}}</h2>

  <h2>{{$store.getters.powerCounter}}</h2>

      <h2>{{$store.getters.more20Stu}}</h2>
</div>
</template>

<script>
export default {
  name: 'HelloVuex',
  props: {
    counter: Number
  },
  
  // computed: {
    // more20Stu() {
      // return this.$store.state.students.filter(s => s.age > 20)
    // }
  // }
}
</script>

<style>

</style>