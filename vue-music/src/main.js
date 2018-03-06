import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import VueLazyload from 'vue-lazyload'
import {
  /* eslint-disable no-unused-vars */
  Style,
  Slide,
  Scroll,
  IndexList
} from 'cube-ui'

import 'common/stylus/index.styl'

Vue.use(Slide)
Vue.use(Scroll)
Vue.use(IndexList)

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
