<template>
<div style="position: relative; overflow: hidden;">
  <v-toolbar color="blue" absolute dark dense scroll-off-screen scroll-target="#scrolling-techniques"><i color="black" class="fas fa-pencil-alt"></i>
    <v-toolbar-title id="title" class="white--text"><p class="title white--text">Nstack</p></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      sign in
    </v-btn>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
  </v-toolbar>
  <div style="max-height: 200px;" class="scroll-y" id="scrolling-techniques">
    <v-container style="height: 280px;">
      <link-post style="margin-top:100px"/>
    </v-container>
  </div>
</div>
</template>
<script>
  import linkPost from '@/components/linkpost'
  export default {
    components:{
      linkPost
    }
  }
</script>

<style>
#title{
  padding-left: 15%;
  
}
</style>
