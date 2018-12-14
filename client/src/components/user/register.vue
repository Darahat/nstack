<template>
<div style="max-width: 980px; margin:10vh auto;" class="grey lighten-5">
  <v-layout row>
    <v-flex xs12>
      <v-card color="white darken-2">
        <v-container mt-5>
          <v-layout>
            <v-flex xs5 pt-5>
              <v-card flat>
                <v-layout row wrap>
                  <v-flex xs12 sm9>
                    <p class="title" style="margin-bottom:30px">Nstack</p>
                    <v-text-field solo type="text" name="username" prepend-icon="person" placeholder="Username" v-model="username" class=" t-field"></v-text-field>
                    <v-text-field solo type="email" v-model="email" name="email" prepend-icon="email" placeholder="Email"  class="t-field"></v-text-field>
                    <v-text-field solo type="password" v-model="password" name="password" prepend-icon="lock" placeholder="Password" class="t-field" ></v-text-field>
                    <div class="red--text" v-html="error" />
                    <div class="t-field">
                      <v-flex xs12 sm6 style="margin: 10px;">
                        <!-- <span style="color:gray;">Forgot password?</span> -->
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-btn color="blue" name="animate" class="white--text" @click="register">Register</v-btn>
                      </v-flex>
                    </div>
                  </v-flex>
                  <span style="color:gray;margin:40px">All ready have a Nstack <router-link  to="/login">Account</router-link>?</span>
                </v-layout>
              </v-card>
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
  data () {
    return {
      email: '',
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await authenticationService.register({
          email: this.email,
          password: this.password,
          username: this.username
        })
        this.$router.push('/login')
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>
<style>
.animate-enter-active{
  animation: coming 5s;
  animation-delay: 3s;
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
