import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/register'
import Login from '@/components/login'
import index from '@/components/activeView'
import post from '@/components/post'
import user from '@/components/userProfile'

// import addpost from '@/components/addPost'
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
      path: '/userProfile/:userId',
      name: 'user',
      component: user
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/index/:userId/:postId',
      name: 'post',
      component: post
    }
    // {
    //   path: '/addpost',
    //   name: 'addpost',
    //   component: addpost
    // }
  ]
})
