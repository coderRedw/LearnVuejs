// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(App);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    // components: { App },
    // template: '<App/>'
    render: function(createElement) {
        //1.普通用法：createElement('标签',{标签的属性},['标签里的内容'])
        // return createElement('h2', { class: 'box' }, ['hello World'])
        // return createElement('h2', { class: 'box' }, ['hello World', createElement('button', ['按钮'])])

        // 2。传入组件对象
        return createElement(App)
    }
})

// runtime-compiler
//template -> ast -> render -> vdom -> UI


//runtime-only(1.性能更高 2.下面的代码量更少)
//rendeer -> vdom -> UI