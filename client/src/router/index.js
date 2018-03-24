import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/register'
import Login from '@/components/login'
import index from '@/components/activeView'
import post from '@/components/post'
import addpost from '@/components/addPost'
import blank from '@/components/blank'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/post',
      name: 'post',
      component: post
    },
    {
      path: '/addpost',
      name: 'addpost',
      component: addpost
    },
    {
      path: '/blank',
      name: 'blank',
      component: blank
    }
  ]
})
