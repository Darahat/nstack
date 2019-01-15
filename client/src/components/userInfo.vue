<template>
      <v-flex xs6 sm3 offset-sm0>
      <v-card>
        <v-card-media src="https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="100px">
          <v-layout column class="media">
          </v-layout>
        </v-card-media>
        <v-list two-line>
          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="indigo">account_circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{user.username}}</v-list-tile-title>
              <v-list-tile-sub-title>Name</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="indigo">email</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{user.email}}</v-list-tile-title>
              <v-list-tile-sub-title>Contact</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
</template>
<script>
import userService from '@/services/userService'
export default {
  data () {
    return {
      user: {},
      userId: null
    }
  },
  // get logged in user Id from store
  // get userinfo accordint to this user Id
  async mounted () {
    this.userId = this.$store.state.route.params.userId
    this.user = (await userService.show(this.userId)).data
  }
}

</script>
