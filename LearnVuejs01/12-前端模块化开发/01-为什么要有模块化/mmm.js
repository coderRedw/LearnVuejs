// if (flag) {
//   console.log('小明是天才，哈哈哈')
// }

;(function () {
  //1.想使用aaa.js的flag
  if (moduleA.flag) {
    console.log('小明是天才，哈哈哈')
  }

  //2.使用sum函数
  console.log(moduleA.sum(40,50))
})()

//虽然用匿名函数解决了模块之间的命名冲突，但是如果我们又想用那个模块里的函数或者变量呢？比如flag