import axios from 'axios'
import store from '@/store/index'
import qs from 'qs'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json charset=UTF-8'

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    if (store.getters.getToken) {
      config.headers.token = store.getters.token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
  // 对响应数据做点什么
    return response.data
  },
  (error) => {
  // 对响应错误做点什么
    return Promise.reject(error)
  })

export default {
  get (url, params = {}) {
    params['t_' + new Date().getTime()] = Math.random()
    return axios.get(url, {
      params: params
    })
  },
  delete (url, params = {}) {
    params['t_' + new Date().getTime()] = Math.random()
    return axios.delete(url, {
      params: params
    })
  },
  post (url, params = {}) {
    if (params.contentType && params.contentType === 'form') {
      return axios.post(url, qs.stringify(params.data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    } else {
      return axios.post(url, params.data || params)
    }
  },
  put (url, params = {}) {
    return axios.put(url, params)
  },
  patch (url, params = {}) {
    return axios.patch(url, params)
  }
}
