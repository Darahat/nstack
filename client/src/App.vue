<template>
  <div id="app">
    <panel></panel>
    <transition name="img-animation">
    <router-view/>
    </transition>

  </div>
</template>

<script>
import panel from '@/components/global/panel'
import bottomOptions from '@/components/global/bottomoptions'
// import blank from '@/components/blank'
export default {
  components: {
    panel, bottomOptions
  },
  name: 'App'
}
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";

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
.img-animation-enter-active{
  animation: coming .5s;
  animation-delay: .5s;
  opacity: 0;
}
.img-animation-leave-active{
  animation:going .5s;
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
