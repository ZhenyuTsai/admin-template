import http from '../utils/http'

export default {
  login (params) {
    // return http.post('/user/login', params)
    return http.get('/user/login.json', params)
  },
  logout (params) {
    // return http.post('/user/logout', params)
    return http.get('/user/login.json', params)
  },
  getInfo (params) {
    // return http.post('/user/getInfo', params)
    return http.get('/user/getInfo.json', params)
  },
  getMenus (params) {
    // return http.post('/user/getMenus', params)
    return http.get('/user/getMenus.json', params)
  }
}
