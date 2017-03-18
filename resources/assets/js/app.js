import Vue from 'vue'
import router from './router'
import http from './services/http.js'
import userStore from './stores/userStore'

require('bootstrap-sass')

const app = new Vue({
  router,
  created () {
    http.init()
    userStore.init()
  },
  render: h => h(require('./app.vue')),
}).$mount('#app')
