<template>
  <div id="app">
<h2>----APP组件,modules的内容-----------</h2>
  <h2>{{$store.state.a.name}}</h2>
  <button @click="updataName">修改信息</button>
  <h2>{{$store.getters.fullName}}</h2>
  <h2>{{$store.getters.fullName1}}</h2>
  <h2>{{$store.getters.fullName2}}</h2>
  <button @click="acyncUpdataName">异步编程修改数据</button>


    <h2>----APP组件-----------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCounter(5)">+5</button>
    <button @click="addCounter(10)">+10</button>
    <button @click="addStudents">添加学生</button>

        <h2>---------info相关内容-----</h2>
        <h2>{{$store.state.info}}</h2>
        <button @click="infoClick">修改信息</button>

    <h2>----------APP getters相关内容-----</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <!-- <h2>{{more20Stu}}</h2> -->
    <h2>{{$store.getters.more20Stu}}</h2>
    <h2>大于20的个数</h2>
    <h2>{{$store.getters.more20StuLength}}</h2>
    <h2>大于你动态传入的数</h2>
    <h2>{{$store.getters.moreAgeStu(18)}}</h2>

    <h2>-----HelloVuex组件---------</h2>
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import {INCREMENT,DECREMENT,INCREMENTCOUNTER,ADDSTUDENTS,INFOCLICK} from './store/mutation-type'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: '你好呀',
    }
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    subtraction() {
      this.$store.commit(DECREMENT)
    },
    addCounter(count) {
      //payload:负载
      //1.普通的提交封装
      // this.$store.commit('incrementCounter',count)

      //2.特殊的提交封装
      this.$store.commit({
        type: INCREMENTCOUNTER,
        count
      })
    },
    addStudents() {
      const stu = {id: 116, name: 'alan', age: 35}
      this.$store.commit(ADDSTUDENTS,stu)
    },
    infoClick() {
      // this.$store.commit(INFOCLICK)
      // // this.$store.dispatch('aUpdateInfo')
      // this.$store.dispatch('aUpdateInfo', {
      //   message: '我是携带的信息',
      //   success: () => {
      //     console.log('里面的已经完成了');
      //   }
      // })
      this.$store
        .dispatch('aUpdateInfo','我是携带的信息')
        .then(res => {
          console.log('里面完成了提交');
          console.log(res);
        })
    },
    updataName() {
      this.$store.commit('updateName','lishi')
    },
    acyncUpdataName() {
      this.$store.dispatch('aUpdateName')
    }
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
