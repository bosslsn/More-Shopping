import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import toHome from '@/pages/toHome/index.vue'
import foodType from '@/pages/foodType/index.vue'
import vipFood from '@/pages/vipFood/index.vue'
import shopCar from '@/pages/shopCar/index.vue'
import mySelf from '@/pages/mySelf/index.vue'
import Location from '@/pages/fixedPosition/index.vue'
import Address from '@/pages/checkAddress/index.vue'
import Login from '@/pages/login/index.vue'
import NewAddress from '@/pages/addNewAddress/index.vue'
import DetailPage from '@/pages/detailPage/index.vue'

import store from '@/store'
import storage from '@/utils/storage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/tohome',
      children: [
        {
          path: '/tohome',
          name: 'toHome',
          component: toHome
        },
        {
          path: '/foodtype',
          name: 'foodType',
          component: foodType
        },
        {
          path: '/vipfood',
          name: 'vipFood',
          component: vipFood
        },
        {
          path: '/shopcar',
          name: 'shopCar',
          component: shopCar
        },
        {
          path: '/myself',
          name: 'mySelf',
          component: mySelf
        }
      ]
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/newAddress',
      name: 'NewAddress',
      component: NewAddress
    },
    {
      path: '/detailpage',
      name: 'DetailPage',
      component: DetailPage
    }
  ]
})

let locationUrl = [ // 登录黑名单
  'mySelf',
  'shopCar',
  'NewAddress',
  'vipFood'
]
let verificationPage = [ // 定位白名单
  'Address',
  'Location',
  'Login',
  'NewAddress'
]

router.beforeEach((to, from, next) => {
  let addresss = storage.getItem('dmallData')
  if (!store.state.gps_loction && verificationPage.indexOf(to.name) === -1 && !addresss) {
    next({
      path: '/location',
      query: {
        callback: to.path
      }
    })
  } else {
    store.state.gps_loction = addresss
    if (document.cookie.indexOf('token') !== -1) {
      next()
    } else {
      if (locationUrl.indexOf(to.name) !== -1) {
        next({
          path: '/login',
          query: {
            callback: to.path,
            id: to.query.id || ''
          }
        })
      } else {
        next()
      }
    }
  }
})

export default router
