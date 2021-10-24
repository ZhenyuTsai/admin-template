import router from '../router/index'
import store from '../store/index'
import NProgress from 'nprogress'
import {
  Message
} from 'element-ui'

export default (Vue) => {
  const whiteList = ['/login', '/auth-redirect'] // 没有重定向白名单

  router.beforeEach(async (to, from, next) => {
    // start progress bar
    NProgress.start()
    // 确定用户是否已登录
    const hasToken = store.getters.token
    if (hasToken) {
      if (to.path === '/login') {
        // 如果已登录，则重定向到主页
        next({
          path: '/'
        })
        NProgress.done()
      } else {
        // 确定用户是否已通过getInfo获得其权限角色
        const hasRoles = store.getters.roles && store.getters.roles.length > 0
        if (hasRoles) {
          next()
        } else {
          try {
            // 获取导航菜单
            await store.dispatch('user/getMenus')
            // 获取用户信息
            // 注意：角色必须是对象数组！例如：['admin']或，['developer'，'editor']
            const {
              roles
            } = await store.dispatch('user/getInfo')
            // 根据角色生成可访问的路由
            const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

            // 动态添加可访问的路由
            router.addRoutes(accessRoutes)

            // hack方法以确保addRoutes是完整的
            // 设置replace：true，因此导航不会留下历史记录
            next({
              ...to,
              replace: true
            })
          } catch (error) {
            // 删除令牌并进入登录页面以重新登录
            await store.dispatch('user/resetToken')
            Message.error(error || 'Has Error')
            next('/login')
            NProgress.done()
          }
        }
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        // 在免费的登录白名单中，直接进入
        next()
      } else {
        // 其他无权访问的页面将重定向到登录页面。
        next('/login')
        NProgress.done()
      }
    }
  })

  router.afterEach(() => {
    // 完成进度条
    NProgress.done()
  })
}
