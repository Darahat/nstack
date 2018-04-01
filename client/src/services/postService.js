import api from '@/services/api'
export default{
  post (credentials) {
    return api().post('index', credentials)
  },
  index () {
    return api().get('index')
  },
  show (postId) {
    return api().get(`index/${postId}`)
  }
}
