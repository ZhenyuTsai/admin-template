import http from '../utils/http'

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
