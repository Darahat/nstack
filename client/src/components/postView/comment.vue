<template>
  <v-card color="transparent" flat>
      <v-card-text>
        <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="comments">
      <template slot='items' slot-scope='props'>
        <td class='text-xs-left'>
        {{props.item.postComment}}
        </td>
      </template>
    </v-data-table>
        <v-container fluid>
          <v-layout row >
            <v-flex xs12>
              <v-text-field
                name="input-1"
                label="Write a comment Here..."
                auto-focus
                validate-on-blur
                v-model="commentdata.postComment"
              >{{this.post.id}}</v-text-field>
            </v-flex>
          </v-layout>
          <v-btn small color="blue" class="white--text" @click="createComment">Submit</v-btn>
        </v-container>
      </v-card-text>
    </v-card>
</template>
<script>
import commentService from '@/services/cmntService'
import {
  mapState
} from 'vuex'
 export default {
   props:[
     'post', 'user'
   ],
    data () {
      return {
        commentdata: {
          userId: null,
          postId: null,
          postComment: null
        },
        headers: [{
        text: 'Title',
        value: 'title'
      },
      {
        text: 'Artist',
        value: 'artist'
      }
      ],
      pagination: {
        sortBy: 'date',
        descending: true
      },
        comments: [],
        error:null
      }
    },
    async mounted () {
      try{
        if (this.isUserLoggedIn) {
      this.comments = (await commentService.index({
        // userId: this.user.id,
        postId: this.$store.state.route.params.postId
      })).data
        }
        console.log(this.$store.state.route.params.postId)
      }catch (err){
        console.log(err)
      }
    },
    computed:
  {
    ...mapState([
      'isUserLoggedIn',
    ])
  },
    methods:{
      async createComment () {
        this.commentdata.userId = this.$store.state.route.params.userId
        this.commentdata.postId = this.$store.state.route.params.postId
        console.log(this.$store.state.route.params.userId)
        console.log(this.$store.state.route.params.postId)
        try{
        const comment = (await commentService.post(this.commentdata)).data
        console.log('comment', comment)
        }
        catch(error){
this.error = error.response.data.error
        }
      }
    },
    // async mounted(){

    // }
 }
</script>
