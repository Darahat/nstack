import api from '@/services/api'
export default{
  index () {
    return api().get('userIndex')
  },
  show (userId) {
    return api().get(`userIndex/${userId}`)
  }
}
