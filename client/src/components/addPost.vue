<template>
  <v-container grid-list-xl>
    <v-layout row justify-center>
      <v-flex xs12 class="my-5">
        <v-card>
          <v-toolbar color="blue">
            <v-btn icon>
              <v-icon color="white">arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title class="white--text">Back</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon color="white">more_vert</v-icon>
            </v-btn>
          </v-toolbar>
          <v-container fluid class="px-3">
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field
                  solo
                  label="Post Title"
                  :rules="[(v) => v.length <= 25 || 'Max 25 characters']"
                  :counter="25"
                  v-model="title"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  solo
                  textarea
                  label="Post Description"
                  :rules="[(v) => v.length <= 2250 || 'Max 50 characters']"
                  :counter="50"
                  v-model="description"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  solo
                  label="Post Image URL"
                  :rules="[(v) => v.length <= 50 || 'Max 50 characters']"
                  :counter="50"
                  v-model="img"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  solo
                  label="Post Tags"
                  :rules="[(v) => v.length <= 50 || 'Max 50 characters']"
                  :counter="50"
                  v-model="tag"
                ></v-text-field>
                <v-btn color="blue" class="white--text">Post</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style scoped>
</style>
