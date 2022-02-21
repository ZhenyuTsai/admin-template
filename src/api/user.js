import http from '../utils/http'
/* let URL = ''
if (process.env.VUE_APP_USE_MOCK === 'true') {
  URL = process.env.VUE_APP_BASE_RESTFUL
} */
export default {
  login (params) {
    return http.post('/user/login', params)
  },
  logout (params) {
    return http.post('/user/logout', params)
  },
  getInfo (params) {
    return http.post('/user/getInfo', params)
  },
  getMenus (params) {
    return http.post('/user/getMenus', params)
  }
}
