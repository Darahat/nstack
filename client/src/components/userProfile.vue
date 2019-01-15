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
    // navigation trough route name
    navigateTo (route) {
      this.$router.push(route)
    }

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
