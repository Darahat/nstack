<template>
 <div>
  <!-- <v-card color="transparent" flat>
    <v-card-text> -->
      <!-- <h2 class="grey--text">Comment Section</h2> -->
      <v-data-table :pagination.sync="pagination" :items="comments">
        <template slot='items' slot-scope='props'>
          <td class='text-xs-left pl-1 pr-1'>
            <v-layout row>
              <v-flex xs12 sm12 offset-sm0>
                <v-card color="transparent">
                  <v-card-title>
                    <div primary-title>
                      <span class="blue--text" style="font-family: 'Pacifico', cursive;">
                        <v-icon dark class="white">account_circle</v-icon>{{props.item.username}}</span>
                      <v-spacer></v-spacer>
                      <br>
                      <span class="grey--text" style="font-size:14px; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"
                        primary-title>
                        {{props.item.postComment}}
                      </span>
                    </div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </td>
        </template>
      </v-data-table>
      <!-- <v-pagination :length="6" v-model="pagination"></v-pagination> -->
      <v-container fluid >
        <v-layout row>
          <v-flex xs12 v-if="isUserLoggedIn">
            <v-text-field name="input-1" label="Write a comment Here..." auto-focus validate-on-blur v-model="commentdata.postComment"></v-text-field>
          </v-flex>
        </v-layout>
        <v-btn small color="blue" v-if="isUserLoggedIn" class="white--text" @click="createComment" >Create Comment</v-btn>
      </v-container>
    <!-- </v-card-text>
  </v-card> -->
 </div>
</template>

<script>
import commentService from '@/services/cmntService'
import {
  mapState
} from 'vuex'


export default {
  props: [
    'post', 'user'
  ],
  data () {
    return {
      commentdata: {
        userId: null,
        postId: null,
        postComment: null,
        username: null
      },
      pagination: {
        sortBy: 'createdAt',
        descending: true
      },
      comments: [],
      error: null
    }
  },
  async mounted () {
    
    try {
        this.comments = (await commentService.index({
          // userId: this.user.id,
          postId: this.$store.state.route.params.postId
        })).data
      console.log(this.comments.createdAt)
      console.log(this.$store.state.route.params.postId)
    } catch (err) {
      console.log(err)
    }
    },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  methods: {
//     myFunction() {
//     const d = props.item.updatedAt;
//     const n = d.toLocaleDateString();
//     return n
// },
    async createComment () {
      this.commentdata.userId = this.$store.state.user.id
      this.commentdata.postId = this.$store.state.route.params.postId
      this.commentdata.username = this.$store.state.user.username
      console.log(this.$store.state.user.username)
      console.log(this.$store.state.route.params.postId)
      try {
        const comment = (await commentService.post(this.commentdata)).data
        console.log('comment', comment)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
  // async mounted(){

  // }
}

</script>
