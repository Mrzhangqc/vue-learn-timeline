import { SET_ROUTE } from './mutation-types'

const mutations = {
  // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
  [SET_ROUTE] (state, payload) {
    // mutate state
    state['permission_routes'] = payload
  }
}

export default mutations
