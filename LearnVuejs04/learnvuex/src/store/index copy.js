import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './module/moduleA'
import {INCREMENT,DECREMENT,INCREMENTCOUNTER,ADDSTUDENTS,INFOCLICK} from './mutation-type'

//1.安装插件
Vue.use(Vuex)
//2.创建对象

const state = {
  counter: 100,
  students: [
    {id:110, name: 'zhw',age: 19},
    {id:111, name: 'why',age: 20},
    {id:112, name: 'wyh',age: 22},
    {id:113, name: 'red',age: 34},
  ],
  info: {
    name: 'kobe',
    age: 40,
    height: 1.98
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

//3.导出store独享
export default store