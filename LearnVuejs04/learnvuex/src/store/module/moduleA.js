export default {
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