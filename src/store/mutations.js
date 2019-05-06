import * as types from './mutation-types'
import Vue from 'vue'
const mutations = {
  // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
  [types.SET_ROUTE] (state, payload) {
    // mutate state
    Vue.set(state, 'permission_routes', payload)
  },
  [types.SET_BREADCRUMB] (state, payload) {
    // mutate state
    Vue.set(state, 'breadcrumb', payload)
  },
  [types.SET_TOKEN] (state, payload) {
    // mutate state
    Vue.set(state, 'token', payload)
  }
}

export default mutations
