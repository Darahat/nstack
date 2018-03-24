<template>
<div>
  <panel/>
  <v-layout>
    <v-flex xs12 sm12 offset-sm0>
      <v-card flat>
        <v-card-media class="white--text" height="400px" src="https://images.pexels.com/photos/209640/pexels-photo-209640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox mt-5 pt-5>
                <span class="white--text">23 March 2018</span>
                <br>
                <span class="headline"> If you can't do great things,
                  <br/> do small things in a great way</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-container fill-height fluid>
          <v-layout fill-height>
            <!-- <v-card-title>
            <div>
              <h2>Whitehaven Beach</h2>
              <br>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title> -->
            <v-flex xs6 sm1 justify offset-sm1 mt-3 pt-3>
              <ul>
                <li>
                  <i large class="fa fa-facebook-square" style="font-size:30px;color:#3b5998;"></i>
                </li>
                <li>
                  <i large class="fa fa-linkedin-square" style="font-size:30px;color:#0e76a8;"></i>
                </li>
                <li>
                  <i large class="fa fa-twitter-square" style="font-size:30px;color:#00aced;"></i>
                </li>
              </ul>
            </v-flex>
            <v-flex xs6 sm5 justify offset-sm2 mt-3 pt-3>
              <h1>Demo Test</h1>
              <p style="line-height:30px; font-size:12px;text-align:justify; word-space:1px">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
              <div style="text-align:left">
                <v-avatar
              size="36px"
              slot="activator"
            >
              <img
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt=""
              >
              </v-avatar>
                <h3 class="pb-2">Jorge Washington</h3>
                <h5 class="grey--text pb-3">5 February 1776</h5>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
        <!-- <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-flex>
  </v-layout>
  <bottom-options/>
  <foot-bar/>
</div>

</template>
<script>
import panel from '@/components/panel'
import footBar from '@/components/footer'
import bottomOptions from '@/components/bottomoptions'
export default {
  components: {
    panel, footBar, bottomOptions
  }
}
</script>

<style>
li{
      list-style: none;
}
</style>
