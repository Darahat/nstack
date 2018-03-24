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
                    <v-text-field solo prepend-icon="person"  class="t-field" label="E-mail" style="margin-bottom:10px"></v-text-field>
                    <v-text-field solo prepend-icon="lock"  class="t-field" label="Password"></v-text-field>
                    <div class="t-field">
                      <flex xs12 sm6 >
                        <span style="color:gray;">Forgot password?</span>
                      </flex>
                      <flex xs12 sm6>
                        <v-btn color="blue" class="white--text">Login</v-btn>
                      </flex>
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
export default {
  name: 'register'
}
</script>
