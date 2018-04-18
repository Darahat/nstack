import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import feather from 'vue-icon'
import vueawsome from 'vue-awesome'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
import moment from 'moment'

Vue.use(feather, 'v-icon')
Vue.use(Vuetify)
Vue.use(moment)
Vue.use(vueawsome)
Vue.config.productionTip = false
sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
