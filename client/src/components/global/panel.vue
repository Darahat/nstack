<template>
<v-app light>
  <v-navigation-drawer v-model="drawer" clipped temporary app>
    <v-list>
      <v-list-tile avatar>
        <v-list-tile-avatar v-if="isUserLoggedIn">
          <!-- <img src="account_circle" > -->
          <v-avatar class="indigo">
            <v-icon dark>account_circle</v-icon>
          </v-avatar>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-if="isUserLoggedIn">{{this.$store.state.user.username}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile @click.stop="drawer = !drawer" :to="{name:'index'}">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-if="isUserLoggedIn" @click.stop="drawer = !drawer" :to="{name:'bookmarks'}">
        <v-list-tile-action>
          <v-icon>bookmarks</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>My Bookmarks</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-if="!isUserLoggedIn" @click.stop="drawer = !drawer" :to="{name:'login'}">
        <v-list-tile-action>
          <v-icon>input</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>login</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-if="!isUserLoggedIn" @click.stop="drawer = !drawer" :to="{name:'register'}">
        <v-list-tile-action>
          <v-icon class="fa-user-register">account_circle</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Sign Up</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar app fixed dense>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-items>
      <router-link :to="('/')" style="cursor: pointer;" class="title" tag="p">Nstack</router-link>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <div class="text-xs-center" v-if="$store.state.isUserLoggedIn">
        <v-menu offset-y>

          <v-btn flat class="mt-2" color="primary" dark slot="activator">{{this.$store.state.user.username}}<v-icon
              dark>account_circle</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile>
              <v-list-tile-title>

                <link-post tag="btn" :user="user"></link-post>
              </v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-if="isUserLoggedIn" @click="logout" :to="{name:'login'}">
              <v-icon>power_settings_new</v-icon>
              <v-list-tile-content>
                <v-list-tile-title>Logout</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar-items>
  </v-toolbar>
</v-app>
</template>

<style>
.application--wrap {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 0vh;
  max-width: 100%;
  position: relative;
}
</style>
<script>
import userService from '@/services/userService'
import linkPost from '@/components/global/linkpost'

import {
  mapState
} from 'vuex'
export default {
  data: () => ({
    drawer: false,
    user: {}
  }),
  // mapState library keep session
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  methods: {
    // navigation trough route name
    navigateTo (route) {
      this.$router.push(route)
    },
    // logout function remove logged in user info from store
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'index'
      })
      this.drawer = false
    }
  },
  components: {
    linkPost
  },
  // get logged in user Id from store
  // get userinfo accordint to this user Id
  async mounted () {
    try {
      const userId = this.$store.state.user.id
      this.user = (await userService.show(userId)).data
    } catch (err) {
      console.log('No User Logged in')
    }
  }
}

</script>
