import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Cityhome from '@/components/city/Cityhome'
import HomeDetail from '@/components/HomeDetail/HomeDetail'
import Comment from '@/components/comment/comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: Cityhome
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: HomeDetail
    },
    {
      path: '/Comment',
      name: 'Comment',
      component: Comment
    }
  ]
})
