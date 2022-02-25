/**
 * @Version
 * @Author ZhenYuTsai
 * @Descripttion
 * @Date 2022-02-21 15:06:08
 * @LastEditors ZhenYuTsai
 */

import Layout from '@/components/layout/index.vue'
export default {
  path: '/userAdmin',
  component: Layout,
  redirect: '/userAdmin/user',
  meta: {
    role: ['admin'],
    title: '用户管理'
  }, // 页面需要的权限
  children: [
    {
      path: '/userAdmin/department',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/UserAdmin/department/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '部门管理'
      }
    },
    {
      path: '/userAdmin/menu',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/UserAdmin/menu/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '菜单管理'
      }
    },
    {
      path: '/userAdmin/role',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/UserAdmin/role/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '角色管理'
      }
    },
    {
      path: '/userAdmin/user',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/UserAdmin/user/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '用户管理'
      }
    }
  ]
}
