<template>
  <v-app light>
    <v-navigation-drawer
      clipped
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <!-- <img src="account_circle" > -->
            <v-avatar class="indigo">
      <v-icon dark>account_circle</v-icon>
    </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{user.username}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" @click.stop="drawer = !drawer" :key="item.title" @click="navigateTo('/index')">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left dense>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title @click="navigateTo('/index')"><p class="title">Nstack</p></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat v-if="$store.state.isUserLoggedIn" @click="logout">Log out</v-btn>
      <v-btn flat v-if="!$store.state.isUserLoggedIn" @click="navigateTo('/login')">Login</v-btn>
      <v-btn flat v-if="!$store.state.isUserLoggedIn" @click="navigateTo('/register')">Sign up</v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <link-post :user="user" v-if="$store.state.isUserLoggedIn"></link-post>
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
import linkPost from '@/components/linkpost'
export default {
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
    }
  },
  components: {
    linkPost
  },
  async mounted () {
    const userId = this.$store.state.user.id
    // console.log(userId)
    this.user = (await userService.show(userId)).data
    // console.log(this.user)
  },
  data: () => ({
    drawer: false,
    user: {},
    items: [{
      title: 'Home',
      icon: 'dashboard',
      name: 'index'
    }
    ]
  })
}
</script>
