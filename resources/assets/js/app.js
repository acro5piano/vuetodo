import Vue from 'vue'

require('bootstrap-sass')

const app = new Vue({
  render: h => h(require('./app.vue')),
}).$mount('#app')
