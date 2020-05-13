import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false;


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import store from './store/store';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  el: '#app',
  store,
  beforeCreate () {
    this.$store.commit('initialiseVueKan')
  },
  render: h => h(App)
})
