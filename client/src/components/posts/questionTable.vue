<template>
  <v-container grid-list-md offset-sm3 >
    <search/>
    <v-layout row wrap>

      <v-flex  style="cursor: pointer;" xs12 sm4 v-for="post in posts" :key="post.id">
          <v-card >
            <v-card-media class="animated fadeIn white--text" height="200px" :src="post.imgurl" @click="navigateTo({
                name: 'post',
                params: {
                  postId: post.id,
                  userId: post.userId
                }})">
            </v-card-media>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-container fill-height animated fadeInLeftBig fluid style="text-align:left">
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="subheading grey--text">{{post.title}}</span>
                    <!-- <p class="black--text">{{user.username}}</p> -->
                  </v-flex>
                </v-layout>
              </v-container>
              <!-- <v-badge color="pink" left>
                <span slot="badge">0</span>
                <v-btn icon small right>
                  <v-icon>favorite</v-icon>
                </v-btn>
              </v-badge>
              <v-btn icon small right>
                <v-icon>bookmark</v-icon>
              </v-btn> -->

            </v-card-actions>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </template>
<script>
import postService from '@/services/postService'
// import userService from '@/services/userService'
import blank from '@/components/blank'
import search from '@/components/posts/search'
import _ from 'lodash'
export default {
  data () {
    return {
      posts: [],
      pagination: {
        sortBy: 'createdAt',
        descending: true
      }
      //  post: {},
      // user: {}
    }
  },
  components: {
    blank,
    search
  },
  // get route query search value and send it to database and check any information exist or not
  // handle db attribute and check evry value of these attribute  from database
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.posts = (await postService.index(value)).data
        _.orderBy(this.posts, ['title', 'imgurl'], ['desc', 'asc'])
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
