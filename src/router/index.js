import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AndroidView from '../views/AndroidView.vue'
import IosView from '../views/IosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/android',
        name: 'android',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: AndroidView
        },
    {
        path: '/ios',
        name: 'ios',
        component: IosView
    }
  ]
})

export default router
