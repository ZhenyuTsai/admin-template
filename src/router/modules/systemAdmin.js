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
    role: ['admin'],
    title: '系统管理'
  }, // 页面需要的权限
  children: [
    {
      path: '/systemAdmin/changePassword',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/SystemAdmin/changePassword/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '修改密码'
      }
    },
    {
      path: '/systemAdmin/mail',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/SystemAdmin/Notification/mail/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '邮件'
      }
    },
    {
      path: '/systemAdmin/official',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/SystemAdmin/Notification/official/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '公众号'
      }
    },
    {
      path: '/systemAdmin/sms',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/SystemAdmin/Notification/sms/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '短信'
      }
    },
    {
      path: '/systemAdmin/station',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/SystemAdmin/Notification/station/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '站内信'
      }
    },
    {
      path: '/systemAdmin/reserveConfig',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/SystemAdmin/reserveConfig/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '预约时间配置'
      }
    },
    {
      path: '/systemAdmin/ruleConfig',
      component: () => import(/* webpackChunkName:'userAdmin' */ '@/views/modules/SystemAdmin/ruleConfig/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '分配规则配置'
      }
    }
  ]
}
