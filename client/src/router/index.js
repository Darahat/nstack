import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/user/register'
import Login from '@/components/user/login'
import index from '@/components/posts/activeView'
import post from '@/components/postView/post'
import savedPost from '@/components/postView/savedPost'
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
      path: '/bookmarks',
      name: 'bookmarks',
      component: savedPost
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
