import Vue from 'vue'
import router from './router'

require('bootstrap-sass')

const app = new Vue({
  router,
  render: h => h(require('./app.vue')),
}).$mount('#app')
