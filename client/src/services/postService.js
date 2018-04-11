import api from '@/services/api'
export default{
  post (post) {
    return api().post('index', post)
  },
  put (post) {
    return api().put(`index/${post.id}`, post)
  },
  index (search) {
    return api().get('index', {
      params: {
        search: search
      }
    })
  },
  show (postId) {
    return api().get(`index/${postId}`)
  },
  showUserId (userId) {
    return api().get(`index/${userId}`)
  },
  userIndex (userId) {
    return api().get('index', {
      params: {
        userId: userId
      }
    })
  }
}
