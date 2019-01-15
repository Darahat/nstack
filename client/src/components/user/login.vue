<template>
<div style="max-width: 980px; margin:10vh auto;" class="grey lighten-5">
  <v-layout row>
    <v-flex xs12>
      <v-card color="white darken-2">
        <v-container mt-5>
          <v-layout>
            <v-flex pt-5>
              <div>
                <v-layout row wrap>
                  <v-flex md12 sm10>
                    <p class="title" style="margin-bottom:30px">Nstack</p>
                    <v-text-field solo prepend-icon="person"  v-model="email" class="animated fadeInLeft t-field" label="E-mail" style="margin-bottom:10px"></v-text-field>
                    <v-text-field solo prepend-icon="lock"  v-model="password" class="animated fadeInLeft t-field" label="Password"></v-text-field>
                    <div class="t-field">
                      <v-flex xs12 sm12 >
                        <!-- <span style="color:gray;">Forgot password?</span> -->
                      </v-flex>
                      <v-flex xs12 sm12>
                        <div class="red--text" v-html="error"></div>
                        <transition name="img-animation">
                        <v-btn color="blue" class="animated slideInDown white--text" @click="login">Login</v-btn>
                        </transition>

                      </v-flex>
                    </div>
                  </v-flex>
                  <!-- <span style="color:gray;margin:50px">-  -  -  -  -  -  -  -   - or -  -   -  -  -  -  -  -  </span> -->
                  <span style="color:gray;margin:40px"><router-link  to="/register">Create</router-link>  my Nstack account!</span>
                </v-layout>
              </div>
            </v-flex>
            <v-flex xs7 img>
              <transition name="img-animation">
              <v-card-media src="https://images.pexels.com/photos/7974/pexels-photo.jpg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb" class="whiite--text" style="height:530px; margin:0px; padding:0px"></v-card-media>
            </transition>
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
    // send email and password info to database
    // after that from payload  token and user information store to local store
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
<style>
@media only screen and (max-width: 600px) {
.img{
  visibility:collapse;
}
}
.img-animation-enter-active{
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}
.img-animation-leave-active{
  animation:going 1s;
}
@keyframes going {
  from{
    transform: translateX(0)
  }
  to{
    transform:translateX(-150px);
    opacity: 0;
  }
}
@keyframes coming {
  from{
    transform: translateX(-100px);
    opacity: 0;
  }
  to{
    transform:translateX(0);
    opacity: 1;
  }
}
</style>
