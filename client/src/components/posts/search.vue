<template>
  <div>
        <v-text-field solo prepend-icon="search" v-model="search"
          value="Input text"
          class="input-group--focused" placeholder="search" style="margin-bottom:10px;" loading></v-text-field>
  </div>
</template>
<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (value) {
      const route = {
        name: 'index'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.search = value
      }
    }
  }
}

</script>
