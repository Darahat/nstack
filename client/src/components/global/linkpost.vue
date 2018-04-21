<template>
  <div style="border-bottom:1px solid gray">
    <!-- <v-flex xs12 sm5> Community> Active View</v-flex> -->
    <span tag="v-list-tile" style="cursor: pointer;" color="blue" dark @click.stop="dialog = true" class="flat mt-2 white--text">
      <p class="black--text "><v-icon class="material-icons">add_box</v-icon>Add Post</p>
    </span>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false" scrollable id="dialog">
      <v-card color="white" tile>
        <v-toolbar card dark class="white--text" color="blue darken-1">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>New Post</v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- <v-toolbar-items>
              <v-btn dark flat @click.native="dialog = false">Save</v-btn>
            </v-toolbar-items> -->
        </v-toolbar>
        <v-card-text>
          <v-container class="py-3 my-3 mx-5 px-5">
            <v-layout row wrap>
              <v-flex xs12>
                <v-flex xs12>
                </v-flex>
                <v-text-field class="mb-3" solo required :rules="[required]" label="Post Title" v-model="post.title"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field class="mb-3" solo required :rules="[required]" textarea label="Post Description" v-model="post.description"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field class="mb-3" dark solo required :rules="[required]" label="Post Image URL" v-model="post.imgurl"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field class="mb-3" solo required :rules="[required]" label="Post Tags" v-model="post.tags"></v-text-field>

                <!-- <v-text-field
                  :v-bind="user.username"
                  type="hidden"
                  v-
                  v-model="post.userId"
                >
                </v-text-field> -->
                <span class="red--text" v-html="error"></span>
                <v-btn color="blue" @click="createPost" class="white--text">Post</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import postService from '@/services/postService'
export default {
  props: [
    'user'
  ],
  data () {
    return {
      post: {
        title: null,
        description: null,
        imgurl: null,
        tags: null,
        userId: null
      },
      dialog: false,
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async createPost () {
      console.log(this.post.userId)
      console.log(this.user.id)
      this.post.userId = this.user.id
      console.log(this.post.userId)
      const areAllFieldsFilledIn = Object
        .keys(this.post)
        .every(key => !!this.post[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill all the required fields. '
        return
      }
      try {
        await postService.post(this.post)
        this.dialog = false
        this.$router.push({
          name: 'index'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>
<style >
#link{
  margin-top: 80px;
}
</style>
