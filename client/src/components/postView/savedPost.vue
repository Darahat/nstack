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
    // mapState library keep session
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  // check user logged in
  // get bookmarked post's info
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await bookmarkService.index()).data
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
.b-data {
  color:skyblue;
  font-size: 5vw;
}
</style>
