import api from '@/services/api'

export default {
  index (comment) {
    return api().get('comments', {
      params: comment
    })
  },
  post (comment) {
    return api().post('comments', comment)
  },
  delete (commentId) {
    return api().delete(`comments/${commentId}`)
  }
}
