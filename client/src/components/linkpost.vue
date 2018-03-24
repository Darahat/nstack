<template>
    <div style="border-bottom:1px solid gray">
    <v-container fluid>
      <v-layout>
        <v-flex xs12 sm5> Community> Active View</v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 sm5>
          <v-btn color="blue" dark @click.stop="dialog = true" class="white--text">New Post</v-btn>
        </v-flex>
        <v-dialog
        v-model="dialog"
        fullscreen
        transition="dialog-bottom-transition"
        :overlay="false"
        scrollable
        id="dialog"
      >
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
                <v-text-field
                  class="mb-3"
                  solo
                  label="Post Title"
                  :counter="25"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                class="mb-3"
                  solo
                  textarea
                  label="Post Description"
                  :counter="50"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                class="mb-3"
                  dark
                  solo
                  label="Post Image URL"
                  :counter="50"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                class="mb-3"
                  solo
                  label="Post Tags"
                  :counter="50"
                ></v-text-field>
                <v-btn color="blue" class="white--text">Post</v-btn>
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
export default {
  data () {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  }
}
</script>
<style>
</style>
