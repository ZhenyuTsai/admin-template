/**
 * @Version
 * @Author ZhenYuTsai
 * @Descripttion
 * @Date 2022-02-21 15:04:31
 * @LastEditors ZhenYuTsai
 */

import Layout from '@/components/layout/index.vue'
export default {
  path: '/videoClaim',
  component: Layout,
  redirect: '/videoClaim/integratedQuery',
  meta: {
    role: ['admin'],
    title: '视频理赔'
  }, // 页面需要的权限
  children: [
    {
      path: '/videoClaim/integratedQuery',
      component: () => import(/* webpackChunkName:'videoClaim' */ '@/views/modules/VideoClaim/Claim/integratedQuery/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '综合查询'
      }
    },
    {
      path: '/videoClaim/taskAdmin',
      component: () => import(/* webpackChunkName:'videoClaim' */ '@/views/modules/VideoClaim/Claim/taskAdmin/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '任务管理'
      }
    },
    {
      path: '/videoClaim/taslHandle',
      component: () => import(/* webpackChunkName:'videoClaim' */ '@/views/modules/VideoClaim/Claim/taslHandle/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '任务办理'
      }
    },
    {
      path: '/videoClaim/feeSettlement',
      component: () => import(/* webpackChunkName:'videoClaim' */ '@/views/modules/VideoClaim/Claim/feeSettlement/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '调查费用结算'
      }
    },
    {
      path: '/videoClaim/VideoServer',
      component: () => import(/* webpackChunkName:'videoClaim' */ '@/views/modules/VideoClaim/VideoServer/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '视频服务'
      }
    }
  ]
}
