import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Article from '../views/Article.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    redirect:'/index',
    children:[
      {
        path:'/index',
        name:'Index',
        component:Index
      },
      {
        path: '/article',
        component: Article,
      }
    ],
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

})

export default router
