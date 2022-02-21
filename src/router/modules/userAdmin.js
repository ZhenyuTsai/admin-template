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
    role: ['admin']
  }, // 页面需要的权限
  children: [
    {
      path: '/userAdmin/department',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/UserAdmin/department/index.vue')
    },
    {
      path: '/userAdmin/menu',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/UserAdmin/menu/index.vue')
    },
    {
      path: '/userAdmin/role',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/UserAdmin/role/index.vue')
    },
    {
      path: '/userAdmin/user',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/UserAdmin/user/index.vue')
    }
  ]
}
