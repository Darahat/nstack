<template>
<div id="foot">
  <v-container>
    <p id="ques" style="font-family: 'Open Sans Condensed', sans-serif;font-size:30px;">Didn't find what you
      <br /> are looking for?</p>
  </v-container>
  <v-layout row justify-center>
    <v-btn color="red" dark @click.native.stop="dialog = true" class="white--text">Visit our help center</v-btn>
    <!-- <v-btn color="primary" >Open Dialog</v-btn> -->
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Do you get Stuck?</v-card-title>
        <v-card-text>Sorry, our helpline office is not open yet.After opening of our office we will provide any help
          you want.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Click me</v-btn>
          <!-- <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Agree</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  <v-container grid-list-md offset-sm5 mt-5 pt-5>
    <v-layout row wrap mt-5 pt-5>
    </v-layout>
  </v-container>
</div>
</template>
<style scoped>
#ques {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: lightslategray;
}

#foot {
  background-size: cover;
  background-image: url('../../assets/back.jpeg');
}

li {
  font-size: 7px;
  line-height: 2px;
}
</style>
<script>
import footer from '@/components/global/bottomoptions'
export default {
  components: {
    footer
  },
  data () {
    return {
      dialog: false
    }
  }
}

</script>
