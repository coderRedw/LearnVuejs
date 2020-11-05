export default {
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
}