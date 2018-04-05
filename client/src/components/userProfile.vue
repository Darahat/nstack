<template>
  <v-layout row>
    <v-flex xs6 sm3 offset-sm0>
      <v-card>
        <v-card-media src="https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="100px">
          <v-layout column class="media">
          </v-layout>
        </v-card-media>
        <v-list two-line>
          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="indigo">account_circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{user.username}}</v-list-tile-title>
              <v-list-tile-sub-title>Name</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="indigo">email</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{user.email}}</v-list-tile-title>
              <v-list-tile-sub-title>Contact</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
    <v-container grid-list-md offset-sm3 mt-5>
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
  </v-container>
      <!-- <question-table v-if="this.$store.state.route.params.userId === this.posts.userId"></question-table> -->
    <!-- </v-flex> -->
  </v-layout>
</template>

<script>
import questionTable from '@/components/questionTable'
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
    questionTable
  },
  navigateTo (route) {
    this.$router.push(route)
  },
  async mounted () {
    this.userId = this.$store.state.route.params.userId
    // console.log(this.userId)
    this.user = (await userService.show(this.userId)).data
    // const postUserId = userId
    // console.log(postUserId)

    this.userPosts = (await postService.showUserId(this.userId)).data
    // this.user = (await userService.show(userId)).data
  }
  // props: [
  //   'posts'
  // ]
}

</script>
<style >
  .media
    {
    height: 100%;
    margin: 0
    }
</style>
