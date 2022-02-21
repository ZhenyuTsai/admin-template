/**
 * @Version
 * @Author ZhenYuTsai
 * @Descripttion
 * @Date 2022-02-21 15:05:48
 * @LastEditors ZhenYuTsai
 */

import Layout from '@/components/layout/index.vue'
export default {
  path: '/systemAdmin',
  component: Layout,
  redirect: '/systemAdmin/station',
  meta: {
    role: ['admin']
  }, // 页面需要的权限
  children: [
    {
      path: '/systemAdmin/changePassword',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/SystemAdmin/changePassword/index.vue')
    },
    {
      path: '/systemAdmin/mail',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/SystemAdmin/Notification/mail/index.vue')
    },
    {
      path: '/systemAdmin/official',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/SystemAdmin/Notification/official/index.vue')
    },
    {
      path: '/systemAdmin/sms',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/SystemAdmin/Notification/sms/index.vue')
    },
    {
      path: '/systemAdmin/station',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/SystemAdmin/Notification/station/index.vue')
    },
    {
      path: '/systemAdmin/reserveConfig',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/SystemAdmin/reserveConfig/index.vue')
    },
    {
      path: '/systemAdmin/ruleConfig',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/SystemAdmin/ruleConfig/index.vue')
    }
  ]
}
