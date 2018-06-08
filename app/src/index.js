import 'babel-polyfill'
import '#/app.scss'
import Vue from 'vue'
import App from './App.vue'
import { http } from './services'

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  created: () => http.init(),
  render: h => h(App)
})
