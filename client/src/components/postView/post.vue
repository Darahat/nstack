<template>
  <div>
    <v-layout>
      <v-flex xs12 sm12 offset-sm0>
        <v-card flat>
          <v-card-media class="animated fadeInRightBig white--text" height="400px" :src="post.imgurl">
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
              <v-flex xs1 sm1 justify offset-sm2  mr-5 mt-5 pt-3>
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
                    <v-badge color="grey" overlap left fab-transition v-if="$store.state.isUserLoggedIn ">
                      <v-btn icon @click="setFav" v-if="isUserLoggedIn && !fav">
                        <v-icon>favorite_border</v-icon>
                      </v-btn>
                      <v-btn icon @click="unSetFav" v-if="isUserLoggedIn && fav">
                        <v-icon>favorite</v-icon>
                      </v-btn>
                    </v-badge>
                  </li>
                  <li>
                    <edit-post/>
                  </li>
                </ul>
              </v-flex>
              <v-flex xs12 sm4 justify offset-sm0 mr-5 mt-3 pt-3>
                <span class="headline">Demo Test</span>
                <p style="line-height:30px; font-size:12px;text-align:justify; word-space:1px">
                  {{post.description}}
                </p>
                <v-spacer></v-spacer>
                <div style="text-align:right" >
                  <span class="pb-2 body-2">{{user.username}}</span>
                  <v-avatar class="green" size="20px">
                    <i dark class="fa fa-user"></i>
                  </v-avatar>
                  <p class="grey--text caption pb-3">Senior Executive &
                    <br>Human Resource Manager(HRM)
                    <br>Lilo corp.</p>
                </div>
                <comment :post="post" :user="user">Comments</comment>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <bottom-options/>
    <foot-bar/>
  </div>
</template>
<script>
import panel from '@/components/global/panel'
import savedPost from '@/components/postView/savedPost'
import comment from '@/components/postView/comment'
import footBar from '@/components/global/footer'
import bottomOptions from '@/components/global/bottomoptions'
import postService from '@/services/postService'
import userService from '@/services/userService'
import editPost from '@/components/postView/edit-post'
import bookmarkService from '@/services/bookmarkService'
import favoriteService from '@/services/favService'

import {
  mapState
} from 'vuex'
export default {
  data () {
    return {
      post: {},
      user: {},
      bookmarks: [],
      bookmark: null,
      fav: null

    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async userprofile () {

    },

    async setFav () {
      try {
        this.fav = (await favoriteService.post({
          UserId: this.$store.state.user.id,
          PostId: this.post.id
        })).data
        //  console.log(this.$store.state.user.id)
        //   console.log(this.post.id)
        //  console.log('fav')
        //   console.log(fav)
      } catch (err) {
        console.log(err)
      }
    },
    async unSetFav () {
      try {
        // console.log('lal alaland\n\n\n\n')
        // console.log(this.fav.id)
        await favoriteService.delete(this.fav.id)
        this.fav = null
        console.log('after delete\n\n\n\n\n\n\n')
        console.log(this.fav)
      } catch (err) {
        console.log(err)
      }
    },

    // bookmark

    async setAsBookmark () {
      try {
        // console.log(this.post.id)
        // console.log(this.$store.state.user.id)
        const bookmarks = (await bookmarkService.post({
          postId: this.post.id
          // userId: this.$store.state.user.id
        })).data
        this.bookmark = bookmarks
      } catch (err) {
        console.log(err)
      }
    },
    async setAsUnbookmark () {
      try {
        // console.log('bookmarkId\n\n\n\n\n\n\n\n\n')
        // console.log(this.bookmark.Id)
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
    editPost,
    savedPost,
    comment
  },
  watch: {
    async post () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        // const postId = this.$store.state.route.params.postId
        // const userId = this.$store.state.route.params.userId
        const bookmarks = (await bookmarkService.index({
          postId: this.post.id
          // userId: this.$store.state.user.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
        console.log('check bookmark\n\n\n\n\n\n\n')
        // console.log(this.post.id)
        // console.log(this.$store.state.user.id)
        console.log('bookmark', this.bookmarks)
        this.fav = (await favoriteService.index({
          postId: this.post.id,
          userId: this.$store.state.user.id
        })).data
        // console.log('favorite hello jello \n\n\n\n\n\n\n\n',this.fav)
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
