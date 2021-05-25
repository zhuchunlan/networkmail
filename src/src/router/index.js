import vue from 'vue'
import vueRouter from 'vue-router'

vue.use(vueRouter)

const Home =() => import('../views/home/Home.vue')
const Cart =()=> import('../views/cart/Cart.vue')
const Category =()=> import('../views/category/Category.vue')
const Profile =()=> import('../views/profile/Profile.vue')

const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/Category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  }
]

const router = new vueRouter({
  routes,
  // history模式需要后端配置一下，否则用户刷新页面或者手动输入地址会出现404的情况
  mode: 'history'
})

export default router