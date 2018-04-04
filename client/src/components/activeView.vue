<template>
<div>
  <!-- <link-post/> -->
      <v-container>
      <v-flex xs12 sm12>
        <table-data/>
      </v-flex>
</v-container>
<div>
  <bottom-options/>
</div>
<div>
<footer-panel/>
</div>
</div>
</template>
<script>
import tableData from '@/components/questionTable'
// import linkPost from '@/components/linkpost'
import footerPanel from '@/components/footer'
import bottomOptions from '@/components/bottomoptions'
export default {
  components: {
    tableData, footerPanel, bottomOptions
  }
}

</script>
<style>
</style>
