import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/massages_list',
      name: 'massages_list',
      component: () => import('./views/MassagesListPage.vue')
    },
    {
      path: '/massage_details',
      name: 'massage_details',
      component: () => import('./views/MassageDetailsPage.vue')
    },
    {
      path: '/booking_time',
      name: 'booking_time',
      component: () => import('./views/BookingTimePage.vue')
    },
    {
      path: '/booking_info',
      name: 'booking_info',
      component: () => import('./views/BookingInfoPage.vue')
    },
    {
      path: '/thank_page',
      name: 'thank_page',
      component: () => import('./views/ThankPage.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/DashboardPage.vue')
    }
  ]
})
