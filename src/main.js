import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'jquery'
import filters from './filters'
import directives from './directives'
import components from './components'
import middleware from './middleware'

import '../mock/index'
/* if (process.env.VUE_APP_USE_MOCK === 'true') {
} */

Vue.config.productionTip = false
Vue.prototype.$np = NProgress
NProgress.configure({
  showSpinner: false
})
Vue.use(filters)
Vue.use(directives)
Vue.use(components)
Vue.use(middleware)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
