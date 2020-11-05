//配置路由相关的配置
import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessaeg = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

//1。通过vue.use(插件)，安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象
const routes = [
  {
    path: '/',
    // redirect:重定向--重新定义方向
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      // {
        // path: '/',
        // redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path:'message',
        component: HomeMessaeg
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    beforeEach :(to, from, next) => {
      // console.log('abut');
      next()
    }
  },
  {
    path: '/user/:Id',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

//前置守卫（guard）
router.beforeEach((to, form, next) => {
  //从form到to
  document.title =to.matched[0].meta.title
  // console.log(to);
  // console.log('++++++++++++++');
  next()
})

//后置守卫（guard）
router.afterEach((to,from) => {
  // console.log('----------------');
})

//3.将router对象传入vue实例
export default router

// console.log(router);