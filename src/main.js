import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'jquery'
import './permission'
import '../mock/index'

import utils from './utils/index'
Vue.config.productionTip = false
Vue.use(ElementUI)

// 批量注册全局过滤器
for (const item in utils) {
  Vue.filter(item, utils[item])
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
