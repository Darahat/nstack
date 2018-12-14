<template>
  <div>
    <v-text-field solo prepend-icon="search" v-model="search" class=" mb-4" placeholder="search" single-line></v-text-field>
  </div>
</template>
<script>
import _ from 'lodash'
export default {

  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'index'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.search = value
      }
    }
  }
}

</script>
