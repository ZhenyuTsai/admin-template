/**
 * @Version
 * @Author ZhenYuTsai
 * @Descripttion
 * @Date 2022-03-15 16:19:09
 * @LastEditors ZhenYuTsai
 */
import router from '../router/index'
import store from '../store/index'
export default (Vue) => {
  router.beforeEach((to, from, next) => {
    // 单点登录模式
    if (to.query.token) {
      store.dispatch('setToken', to.query.token)
      Vue.prototype.isNative = false
    } else {
      Vue.prototype.isNative = true
    }
    next()
  })
}
