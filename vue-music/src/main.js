import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import {
  /* eslint-disable no-unused-vars */
  Style,
  Slide,
  Scroll
} from 'cube-ui'

import 'common/stylus/index.styl'

Vue.use(Slide)
Vue.use(Scroll)

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
