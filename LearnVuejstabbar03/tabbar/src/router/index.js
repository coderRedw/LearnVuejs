import Vue from 'vue'
import VueRouter from 'vue-loader'


const Home = () => import('../view/home/Home')
const Category = () => import('../view/category/Category')
const Profile = () => import('../view/profile/Profile')
const Cart = () => import('../view/cart/Cart')

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: 'cart',
    component: Cart
  }
]
const router = new VueRouter({
  routes
})

export default router
