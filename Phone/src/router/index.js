import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import HelloWorld from '@/pages/Main'
// import myVideo from '@/pages/Video'
// h
// import ChickMe from "../pages/ChickMe.vue";
// import ChickRegister from "../pages/ChickRegister.vue";
// import ChickLogin from "../pages/ChickLogin.vue";
//m
// import MarketPage from '../pages/Market.vue'
// import CartPage from '../pages/cart.vue'
// import ShopDetails from '../pages/ShopDetails.vue'
// import  payPage from "@/components/carts/play.vue";
import  paySuccess from "../components/carts/paySuccess.vue";

Vue.use(Router)

export default new Router({

  routes: [
    {
      mode:'HelloWorld',
      path: '/',
      name: 'Hello',
      component:  resolve => require(['@/pages/Main'], resolve)
    },
    {
      mode:'myVideo',
      path: '/video',
      name: 'myVideo',
      component:  resolve => require(['@/pages/Video'], resolve)
    },
    {
      mode:'ChickMe',
      path:"/me",
      component: resolve => require(["../pages/ChickMe.vue"], resolve)
    },
    {
      mode:'ChickRegister',
      path:"/register",
      component: resolve => require(["../pages/ChickRegister.vue"], resolve)
    },
    {
      mode:'ChickLogin',
      path:"/login",
      component: resolve => require(["../pages/ChickLogin.vue"], resolve)
    },
    {
      mode:'CartPage',
      path:"/category",
      component: resolve => require(['../pages/cart.vue'], resolve)
    },
    {
      mode:'MarketPage',
      path:"/market",
      component: resolve => require(['../pages/Market.vue'], resolve)
    },
    {
      mode:'ShopDetails',
      path:"/shopDetails",
      name:"shopDetails",
      component: resolve => require(['../pages/ShopDetails.vue'], resolve)
    },
    {
      mode:'payPage',
      path:"/payPage",
      name:"sss",
      component: resolve => require(["@/components/carts/play.vue"], resolve)
    },
    {path:"/paySucc",component:paySuccess},

  ]
})
