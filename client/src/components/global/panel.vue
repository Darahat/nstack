<template>
  <v-app light >
    <v-navigation-drawer v-model="drawer"  clipped temporary
       app>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar v-if="isUserLoggedIn">
            <!-- <img src="account_circle" > -->
            <v-avatar class="indigo">
              <v-icon dark>account_circle</v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-if="isUserLoggedIn">{{user.username}}</v-list-tile-title>
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
        <router-link :to="('/index')" style="cursor: pointer;" class="title" tag="p">Nstack</router-link>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!-- <v-btn flat v-if="$store.state.isUserLoggedIn" @click="logout">Log out</v-btn>
      <router-link class="flat" tag="v-btn" v-if="!$store.state.isUserLoggedIn" :to="{name: 'login'}">Login</router-link>
      <router-link flat tag="v-btn" v-if="!$store.state.isUserLoggedIn" :to="{name:'register'}">Sign up</router-link> -->
        <!-- <link-post> -->
        <div class="text-xs-center" v-if="$store.state.isUserLoggedIn">
          <v-menu offset-y>

            <v-btn flat class="mt-2" color="primary" dark slot="activator">{{user.username}}<v-icon dark>account_circle</v-icon></v-btn>
            <v-list>
              <v-list-tile>
                <v-list-tile-title>

                  <link-post tag="btn" :user="user" ></link-post>
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
  computed:
  {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  //   watch: {
  //   '$route.query.search': {
  //     immediate: true,
  //     async handler (value) {
  //       this.posts = (await postService.index(value)).data
  //     _.orderBy(this.posts, ['title', 'imgurl'], ['desc', 'asc'])
  //     }
  //   }
  // },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
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
  async mounted () {
    try {
      const userId = this.$store.state.user.id
      // console.log(userId)
      this.user = (await userService.show(userId)).data
      // console.log(this.user)
    } catch (err) {
      console.log('No User Logged in')
    }
  },
  data: () => ({
    drawer: false,
    user: {}
  })
}

</script>
