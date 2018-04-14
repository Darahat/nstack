import api from '@/services/api'

export default{
  index (bookmark) {
    return api().get('bookmarks', {
      params: bookmark
    })
  },
  indexShow (bookmark) {
    return api().get('bookmarks', {
      params: bookmark
    })
  },
  post (bookmark) {
    return api().post('bookmarks', bookmark)
  },
  delete (bookmarkId) {
    return api().delete(`bookmarks/${bookmarkId}`)
  }
}
