<template>
<div>
  <v-layout>
    <v-flex xs12 sm12 offset-sm0>
      <v-card flat>
        <v-card-media class="white--text" height="400px" :src="post.imgurl">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox mt-5 pt-5>
                <span class="white--text">{{post.createdAt}}</span>
                <br>
                <span class="headline">{{post.title}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-container fill-height fluid>
          <v-layout fill-height>
            <!-- <v-card-title>
            <div>
              <h2>Whitehaven Beach</h2>
              <br>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title> -->
            <v-flex xs6 sm1 justify offset-sm1 mt-3 pt-3>
              <ul>
                <!-- <li>
                  <v-icon large class="fa fa-facebook-square" style="font-size:30px;color:#3b5998;"></v-icon>
                </li>
                <li>
                  <v-icon large class="fa fa-linkedin-square" style="font-size:30px;color:#0e76a8;"></v-icon>
                </li>
                <li>
                  <v-icon large class="fa fa-twitter-square" style="font-size:30px;color:#00aced;"></v-icon>
                </li> -->
              <li>
              <v-btn icon>
                <v-icon class="fa fa-bookmark"></v-icon>
              </v-btn>
                </li>
                  <li>
                  <v-badge color="grey" overlap left  fab-transition>
                <span slot="badge">0</span>
                <v-btn icon>
                  <v-icon class="fa fa-heart"></v-icon>
                </v-btn>
              </v-badge>
              </li>
                <li>
                  <edit-post/>
                </li>
              </ul>
            </v-flex>
            <v-flex xs6 sm5 justify offset-sm2 mt-3 pt-3>
              <span class="headline">Demo Test</span>
              <p style="line-height:30px; font-size:12px;text-align:justify; word-space:1px">
                {{post.description}}
              </p>
              <v-spacer></v-spacer>
              <div style="text-align:right">
                <span  class="pb-2 body-2">{{user.username}}</span>
                <v-avatar
                class="green"
                size="20px"
            >
              <i dark class="fa fa-user"></i>
              </v-avatar>
                <p class="grey--text caption pb-3">Senior Executive & <br>Human Resource Manager(HRM) <br>Lilo corp.</p>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
        <!-- <v-card->
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-flex>
  </v-layout>
  <bottom-options/>
  <foot-bar/>
</div>

</template>
<script>
import panel from '@/components/panel'
import footBar from '@/components/footer'
import bottomOptions from '@/components/bottomoptions'
import postService from '@/services/postService'
import userService from '@/services/userService'
import editPost from '@/components/edit-post'
export default {
  data () {
    return {
      post: {},
      user: {}
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    panel, footBar, bottomOptions, editPost
  },
  async mounted () {
    const postId = this.$store.state.route.params.postId
    const userId = this.$store.state.route.params.userId
    this.post = (await postService.show(postId)).data
    this.user = (await userService.show(userId)).data
  }
}
</script>

<style>
li{
      list-style: none;
}
</style>
//  @click="navigateTo({
//                 name: 'user',
//                 params: {
//                   userId: post.userId
//                 }})"
