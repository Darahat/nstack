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
            <v-flex xs6 sm1 justify offset-sm1 mt-3 pt-3>
              <ul>
              <li>
              <v-btn icon @click="setAsBookmark" v-if="isUserLoggedIn && !bookmark">
                <v-icon>bookmark_border</v-icon>
              </v-btn>
              <v-btn icon @click="setAsUnbookmark" v-if="isUserLoggedIn && bookmark">
                <v-icon>bookmark</v-icon>
              </v-btn>
                </li>
                  <li>
                  <v-badge color="grey" overlap left  fab-transition v-if="$store.state.isUserLoggedIn ">
                <span slot="badge">0</span>
                <v-btn icon v-if="isUserLoggedIn && !isFavorite">
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon v-if="isUserLoggedIn && isFavorite">
                  <v-icon>favorite_border</v-icon>
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
import bookmarkService from '@/services/bookmarkService'
import {
  mapState
} from 'vuex'
export default {
  data () {
    return {
      post: {},
      user: {},
      bookmark: null,
      isFavorite: true

    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  methods: {
    async setAsBookmark () {
      try {
        console.log(this.post.id)
        console.log(this.$store.state.user.id)
        this.bookmark = (await bookmarkService.post({
          postId: this.post.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async setAsUnbookmark () {
      try {
        console.log(this.bookmark.Id)
        await bookmarkService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    panel,
    footBar,
    bottomOptions,
    editPost
  },
  watch: {
    async post(){
 if (!this.isUserLoggedIn) {
      return
    }
    try {
      // const postId = this.$store.state.route.params.postId
      // const userId = this.$store.state.route.params.userId
      this.bookmark = (await bookmarkService.index({
        postId: this.post.id,
        userId: this.$store.state.user.id
      })).data
      // console.log(this.post.id)
      // console.log(this.$store.state.user.id)
      // console.log('bookmark', this.bookmark)
    } catch (err) {
      console.log(err)
    }
  }
  },
  async mounted () {
    try {
      const postId = this.$store.state.route.params.postId
      const userId = this.$store.state.route.params.userId
      // console.log(this.$store.state.route.params.postId)
      // console.log(this.$store.state.user.id)
      this.post = (await postService.show(postId)).data
      this.user = (await userService.show(userId)).data
    } catch (err) {
      console.log(err)
    }
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
