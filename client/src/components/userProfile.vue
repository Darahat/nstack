<template>

  <v-layout row>
<userinfo/>
      <v-container grid-list-md offset-sm3 mt-5>
    <v-layout row wrap>
      <v-flex xs12 sm4 v-for="post in userPosts" :key="post.id">
        <v-card>
          <v-card-media class="white--text" height="200px" :src="post.imgurl" @click="navigateTo({
                name: 'post',
                params: {
                  postId: post.id,
                  userId: post.userId
                }})">
          </v-card-media>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-container fill-height fluid style="text-align:left">
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="subheading grey--text">{{post.title}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
    <!-- <v-container grid-list-md offset-sm3 mt-5>
    <v-layout row wrap>
      <v-flex xs12 sm4 v-for="post in userPosts" :key="post.userid">
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
  </v-container> -->
      <!-- <question-table v-if="this.$store.state.route.params.userId === this.posts.userId"></question-table> -->
    <!-- </v-flex> -->
  </v-layout>
</template>

<script>
import userPosts from '@/components/userPosts'
import userinfo from '@/components/userInfo'
import postService from '@/services/postService'
import userService from '@/services/userService'
export default {
  data () {
    return {
      user: {},
      userPosts: {},
      userId: null
    }
  },
  components: {
    userPosts,
    userinfo
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
    // watch: {
    //     '$route.query.search': {
    //       immediate: true,
    //       async handler (value) {
    //         this.posts = (await postService.index(value)).data
    //       }
    //     }
    //   },

  },
  async mounted () {
    this.userId = this.$store.state.route.params.userId
    // console.log('userid\n\n\n\n')
    // console.log(this.userId)
    this.user = (await userService.show(this.userId)).data
    this.userPosts = (await postService.userIndex(this.userId)).data
    console.log('userposts\n\n\n\n')
    console.log(this.userPosts)
  }
}
</script>
<style >
  .media
    {
    height: 100%;
    margin: 0
    }
</style>
