import Vue from 'vue'
import router from './router'
import App from './App'

// import 'assets/styles/stylus/main.styl'
import 'assets/styles/stylus/main.styl'

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
