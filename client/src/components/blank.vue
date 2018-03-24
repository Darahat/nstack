<template>
  <div>
    <v-layout row justify-center>
      <v-btn color="blue" dark @click.stop="dialog = true">Open Dialog 1</v-btn>
      
    </v-layout>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
        dialog2: false,
        dialog3: false,
        notifications: false,
        sound: true,
        widgets: false,
        items: [
          {
            title: 'Click Me'
          },
          {
            title: 'Click Me'
          },
          {
            title: 'Click Me'
          },
          {
            title: 'Click Me 2'
          }
        ],
        select: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' }
        ]
      }
    }
  }
</script>
