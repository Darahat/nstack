<template>
<div></div>
</template>
<script>
import postService from '@/services/postService'
// import userService from '@/services/userService'
import blank from '@/components/blank'
import search from '@/components/posts/search'
export default {
  data () {
    return {
      posts: null
      //  post: {},
      // user: {}
    }
  },
  components: {
    blank,
    search
  },
  // get route query search value and send it to database and check any information exist or not
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.posts = (await postService.index(value)).data
      }
    }
  },
  methods: {
    // navigation trough route name
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style>
</style>
