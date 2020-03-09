import axios from 'axios'
import store from '../store/'

// axios 配置
axios.defaults.timeout = 1000 // default is `0` (no timeout)
//axios.defaults.baseURL = '/api'
axios.defaults.baseURL = '/'

// You can cancel a request using a cancel token
const CancelToken = axios.CancelToken
const source = CancelToken.source()

// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.cancelToken = source.token
    if (store.getters.token) {
      // config.headers.Authorization = `token ${store.getters.token}`
      config.headers['X-Token'] = `${store.getters.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data && response.status === 200 && String(response.data.code) === '200') {
      return response.data.result
    } else if (response.data && response.status === 200) {
      if (String(response.data.code) === '403') {
        location.href = '#/403'
      } else if (String(response.data.code) === '404') {
        location.href = '#/404'
      } else if (String(response.data.code) === '4003') {
        location.href = '/index'
      }
    }
  },
  error => {
    if (error.response) {
      if (error.response.status === 500) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject('服务器内部错误')
      } else if (error.response.status === 404) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject('服务未找到')
      }
      return Promise.reject(error.response.data || '')
    }
  }
)

export default axios
