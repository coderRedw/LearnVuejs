export default {
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
}