<template>
  <div id="app">
    <panel></panel>
    <router-view/>
  </div>
</template>

<script>
import panel from '@/components/panel'
// import blank from '@/components/blank'
export default {
  components: {
    panel
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
::-webkit-scrollbar {
    display: none;
}
body{
  background-color:#FFFAF7
}
.title{
  font-family: 'Pacifico', cursive;
  color:dodgerblue;
  font-size: 25px;
  font-weight: bold;
  padding-top:15px;
  text-align: left;
}
h1{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size:35px;
  padding-bottom: 5px;
}
h4{
  margin-bottom: 15px;
}
h6{
  margin-bottom: 25px;
  color:gray
}
.t-field{
  margin-bottom:10px
}
</style>
