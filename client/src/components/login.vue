<template>
<div style="max-width: 980px; margin: auto;" class="grey lighten-5">
  <v-layout row>
    <v-flex xs12>
      <v-card color="white darken-2">
        <v-container mt-5>
          <v-layout>
            <v-flex xs5 pt-5>
              <div>
                <v-layout row wrap>
                  <v-flex xs12 sm9>
                    <p class="title" style="margin-bottom:30px">Nstack</p>
                    <v-text-field solo prepend-icon="person"  v-model="email" class="t-field" label="E-mail" style="margin-bottom:10px"></v-text-field>
                    <v-text-field solo prepend-icon="lock"  v-model="password" class="t-field" label="Password"></v-text-field>
                    <div class="t-field">
                      <v-flex xs12 sm6 >
                        <span style="color:gray;">Forgot password?</span>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <div class="red--text" v-html="error"></div>
                        <v-btn color="blue" class="white--text" @click="login">Login</v-btn>
                      </v-flex>
                    </div>
                  </v-flex>
                  <!-- <span style="color:gray;margin:50px">-  -  -  -  -  -  -  -   - or -  -   -  -  -  -  -  -  </span> -->
                  <span style="color:gray;margin:40px">Create my Nstack account!</span>
                </v-layout>
              </div>
            </v-flex>
            <v-flex xs7>
              <v-card-media src="https://images.pexels.com/photos/7974/pexels-photo.jpg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb" style="height:530px; margin:0px; padding:0px"></v-card-media>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</div>

</template>
<script>
import authenticationService from '@/services/authenticationService'
export default {
  methods: {
    async login () {
      try {
        const response = await authenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'index'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  }
}

</script>
