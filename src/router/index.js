import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import ProductsList from '../views/front/ProductsList.vue'

const routes = [
  // 404
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../components/404.vue')
  },
  // 前台首頁
  {
    path: '/indexfront',
    name: 'IndexFront',
    component: () => import('../views/front/IndexFront.vue')
  },
  // 前台內頁
  {
    path: '/dashboardF',
    name: 'dashboardF',
    component: () => import('../views/front/Dashboard.vue'),
    // 前台的槽狀結構
    children: [
      {
        path: 'ProductsList',
        name: 'ProductsList',
        component: ProductsList
      },
      // 單一product也要進路由表，但是用動態id
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/front/Product.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */'../views/front/About.vue')
      },
      {
        path: 'newin',
        name: 'newin',
        component: () => import('../views/front/NewProducts.vue')
      },
      {
        path: 'onsale',
        name: 'onsale',
        component: () => import('../views/front/Onsale.vue')
      },
      {
        path: 'decorateIdea',
        name: 'decorateIdea',
        component: () => import('../views/front/DecorateIdea.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/front/Cart.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/front/Login.vue')
      }]
  },
  // 後台登入，一般會拉出來另外放，因為驗證會做在後台的dashboard上
  {
    path: '/loginBack',
    name: 'loginBack',
    component: () => import('../views/back/LoginBack.vue')
  },
  // 後台Router
  {
    path: '/dashboard',
    component: () => import('../views/back/Dashboard.vue'),
    // 後台的槽狀結構
    children: [
      {
        path: 'IndexBack',
        name: 'IndexBack',
        component: () => import('../views/back/IndexBack.vue')
      },
      {
        path: 'productslist',
        component: () => import('../views/back/ProductsList.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/back/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/back/Coupons.vue')
      },
      {
        path: 'analysize',
        component: () => import('../views/back/Analysize.vue')
      },
      {
        path: 'UploadImg',
        component: () => import('../views/back/Upload_img.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
