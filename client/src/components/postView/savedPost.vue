<template>
  <v-card color="transparent" class="mt-5">
    <v-card-text>
      <p style="font-size:20px;color:skyblue">My BookMarks</p>
    <v-card class="mr-5 ml-5 pl-5 pr-5">
      <v-data-table  :pagination.sync="pagination" :items="bookmarks">
        <template slot='items' slot-scope='props'>
          <td style="font-size:20px; cursor: pointer; font-family: 'Trebuchet MS'" class='pt-3 justify animated slideInUp b-data' @click="navigateTo({
                name: 'post',
                params: {
                  postId: props.item.Post.id,
                  userId: user.id
                }})">
            {{props.item.title}}
          </td>
          <td class='text-xs-right'>
            <span>{{props.item.createdAt}}</span>
          </td>
          <td class='text-xs-right'>
            <img style="width:300px; height:200px" :src="props.item.imgurl" alt="">
          </td>
        </template>
      </v-data-table>
    </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
import bookmarkService from '@/services/bookmarkService'
import {
  mapState
} from 'vuex'
export default {
  data () {
    return {
      post: {},
      postId: null,
      userId: null,
      headers: [{
        text: 'Bookmarks',
        value: 'Saved Posts'
      }],
      pagination: {
        sortBy: 'createdAt',
        descending: true
      },
      bookmarks: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await bookmarkService.index()).data
    }
    try {
      // this.postId = this.$store.state.route.params.postId
      // this.userId = this.$store.state.user.id
      // console.log(this.postId)
      // console.log(this.userId)
      // this.post = (await postService.show(postId)).data
      //  this.user = (await userService.show(userId)).data
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}

</script>
<style>
.b-data {
  color:skyblue;
  font-size: 5vw;
}
</style>
