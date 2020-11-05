import Vue from 'vue'
import App from './App'
import axios from 'axios'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//1.axios基本使用
// axios({
  // url: 'http://123.207.32.32:8000/home/multidata',
  // method: 'get',
// }).then(res => {
  // console.log(res);
// })

// axios({
  // url: 'http://www.httpbin.org/',
// }).then(res =>{
  // console.log(res);
// })

// axios({
  // url: 'http://123.207.32.32:8000/home/data',
  // params: {
    // type: 'sell',
    // page: 1
  // }
// }).then(res =>{
  // console.log(res);
// })


//使用全局的axios和对应的配置在进行网络请求
// 2.axios发送并发请求
// axios.defaults.baseURL = "http://123.207.32.32:8000"
// axios.defaults.timeout = 5000

// axios.all([axios({
  // url: '/home/multidata'
// }),axios({
  // url: '/home/data',
  // params: {
    // type:'sell',
    // page: 5
  // }
// })])
// .then(result => {
  // console.log(result);
// })

// axios.all([axios({
  // url: '/home/multidata'
// }),axios({
  // url: '/home/data',
  // params: {
    // type:'sell',
  // }
// })])
// .then(axios,spread((res1, res2) => {
  // console.log(res1);
  // console.log(res2);
// }))


// axios.defaults.baseURL = "http://222.2024.32.32:8000"
// axios.defaults.timeout = 10000


//4。创建对应的axios的实例
// const instance1 = axios.create({
  // baseUrl: 'http://123.207.32.32:8000',
  // timeout: 5000
// })

// instance1({
  // url: '/home/multidata'
// }).then(res => {
  // console.log(res);
// })

// instance1({
  // url: '/home/data',
  // params: {
    // type: 'pop',
    // page: 1
  // }
// })

// const instance2 = axios.create({
  // baseURL: 'http://222.2024.32.32:8000',
  // timeout: 10000
// })

//5.封装request模块
import {request} from './network/request'

// request({
//   url: '/home/multidata'
// },res => {
//   console.log(res);
// },err => {
//   console.log(err);
// })

// request({
//   baseConfig: {

//   },
//   success: function(res) {

//   },
//   failure: function(res) {

//   }
// })

request({
  url: '/home/multidata'
}).then(res =>{
  console.log(res);
}).catch(err => {
  console.log(err);
})