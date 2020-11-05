import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT,DECREMENT,INCREMENTCOUNTER,ADDSTUDENTS,INFOCLICK} from './mutation-type'

//1.安装插件
Vue.use(Vuex)


const moduleA = {
  state: {
    name: 'zhangsan'
  },
  actions: {
    aUpdateName(context) {
      setTimeout( () => {
        context.commit('updateName','wangwu')
      },1000)
    }
  },
  mutations: { 
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return state.name + '11111'
    },
    fullName1(state,getters) {
      return getters.fullName + '222'
    },
    fullName2(state,getters, rootState) {
      return getters.fullName1 + rootState.counter
    }
  }
}
//2.创建对象
const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    [INCREMENT](state) {
      state.counter++
    },
    [DECREMENT](state) {
      state.counter--
    },
    [INCREMENTCOUNTER](state,payload) {
      //1.第一种普通接受
      // state.counter += count

      //2.第二种特殊授受
      state.counter += payload.count
    },
    [ADDSTUDENTS](state,stu) {
      state.students.push(stu)
    },
    [INFOCLICK](state) {
      this.state.info.name = "coderRedw"

      //错误的代码，不能在这里进行异步操作
      // setTimeout(function() {
        // state.info.name = "coderRedw"
      // },1000)
      // this.state.info['address'] = "北京"  //不是响应式的

      // Vue.set(state.info,"address", "北京")  //响应式的

      // delete state.info.age   //该方法不是响应式的
      // Vue.delete(state.info, 'age')   //该方法是响应式的
    }
  },
  actions: {
    //context: 上下文
      // aUpdateInfo(context,payload) {
      //   setTimeout(() => {
      //     context.commit(INFOCLICK)
      //     console.log(payload.message);
      //     payload.success()
      //   })
      // }
      aUpdateInfo(context, payload) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            context.commit(INFOCLICK);
            console.log(payload);

            resolve('1111111')
          },1000)
        })
      }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20Stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20StuLength(state, getters) {
      return getters.more20Stu.length
    },
    moreAgeStu(state) {
      return function(age) {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    a: moduleA
  }
})

//3.导出store独享
export default store