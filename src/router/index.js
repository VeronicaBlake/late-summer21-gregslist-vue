import { createRouter, createWebHashHistory } from 'vue-router'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import Home from '../pages/Home.vue'
import House from '../pages/Houses.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    // required param ':id'
    path: '/car-details/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  },{
    path: '/', 
    name: 'House', 
    component: House
  }
  //NOTE you got this. Creating a route is 100% something you can do. And did!
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
