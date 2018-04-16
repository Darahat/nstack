<template>
    <div>
      <v-btn v-if="$store.state.isUserLoggedIn" icon @click.stop="
                dialog = true">
                <v-icon>mode_edit</v-icon>
              </v-btn>

    <v-container fluid>
      <v-layout>
          <!-- <v-btn color="blue" dark class="white--text">Update Post</v-btn> -->
        <v-dialog
        v-model="dialog"
        fullscreen
        transition="dialog-bottom-transition"
        :overlay="false"
        scrollable
      >
        <v-card color="white" tile>
          <v-toolbar card dark class="white--text" color="blue darken-1">
            <v-btn icon @click.native="dialog = false" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Update Post</v-toolbar-title>
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
                <v-text-field
                  class="mb-3"
                  solo
                  required
                  :rules = "[required]"
                  label="Post Title"
                  v-model="post.title"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                class="mb-3"
                  solo
                  required
                  :rules = "[required]"
                  textarea
                  label="Post Description"
                  v-model="post.description"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                class="mb-3"
                  dark
                  solo
                  required
                  :rules = "[required]"
                  label="Post Image URL"
                  v-model="post.imgurl"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                class="mb-3"
                  solo
                  required
                  :rules = "[required]"
                  label="Post Tags"
                  v-model="post.tags"
                ></v-text-field>

                <!-- <v-text-field
                  :v-bind="user.username"
                  type="hidden"
                  v-
                  v-model="post.userId"
                >
                </v-text-field> -->

                <span class="red--text" v-html="error"></span>
                <v-btn color="blue" @click="save" class="white--text">Save</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
          </v-card-text>

          <div style="flex: 1 1 auto;"/>
        </v-card>
      </v-dialog>
      </v-layout>
    </v-container>
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
    async save () {
      const areAllFieldsFilledIn = Object
        .keys(this.post)
        .every(key => !!this.post[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill all the required fields. '
        return
      }
      const postId = this.$store.state.route.params.postId
      try {
        await postService.put(this.post)
        this.dialog = false
        this.$router.push({
          name: 'post',
          params: {
            postId: postId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const postId = this.$store.state.route.params.postId
      this.post = (await postService.show(postId)).data
    } catch (err) {
      console.log(err)
    }
  }
}

</script>
<style>
</style>
