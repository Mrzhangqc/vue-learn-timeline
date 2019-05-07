// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import axios from './common/axios'
import * as types from './store/mutation-types'

import VueCodemirror from 'vue-codemirror'
// require styles
import 'codemirror/lib/codemirror.css'
// language js
import 'codemirror/mode/javascript/javascript.js'
Vue.use(VueCodemirror)

Vue.use(ElementUI)
Vue.prototype.$http = axios
Vue.config.productionTip = false

// 路由vuex
const { routes } = router.options
store.commit(types.SET_ROUTE, routes)

// token vuex
store.commit(types.SET_TOKEN, escape('测试'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
