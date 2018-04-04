<template>
  <v-container grid-list-md offset-sm3 mt-5>
    <v-layout row wrap>
      <v-flex xs12 sm4 v-for="post in posts" :key="post.id">
          <v-card >
            <v-card-media class="white--text" height="200px" :src="post.imgurl" @click="navigateTo({
                name: 'post',
                params: {
                  postId: post.id,
                  userId: post.userId
                }})">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">{{post.title}}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-badge color="pink" left>
                <span slot="badge">0</span>
                <v-btn icon small right>
                  <v-icon>favorite</v-icon>
                </v-btn>
              </v-badge>
              <v-btn icon small right>
                <v-icon>bookmark</v-icon>
              </v-btn>
                <v-btn icon small>
                  <v-icon left>share</v-icon>
                </v-btn>
              <v-btn icon small @click="navigateTo({
                name: 'post',
                params: {
                  postId: post.id
                }})">
                <v-icon left>edit</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import postService from '@/services/postService'
import blank from '@/components/blank'
export default {
  data () {
    return {
      posts: null
    }
  },
  components: {
    blank
  },
  async mounted () {
    this.posts = (await postService.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}

</script>
<style>
</style>
