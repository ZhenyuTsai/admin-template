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
    role: ['admin']
  }, // 页面需要的权限
  children: [
    {
      path: '/videoClaim/integratedQuery',
      component: () => import(/* webpackChunkName:'videoClaim' */ '@/views/modules/VideoClaim/Claim/integratedQuery/index.vue')
    },
    {
      path: '/videoClaim/taskAdmin',
      component: () => import(/* webpackChunkName:'videoClaim' */ '@/views/modules/VideoClaim/Claim/taskAdmin/index.vue')
    },
    {
      path: '/videoClaim/taslHandle',
      component: () => import(/* webpackChunkName:'videoClaim' */ '@/views/modules/VideoClaim/Claim/taslHandle/index.vue')
    },
    {
      path: '/videoClaim/feeSettlement',
      component: () => import(/* webpackChunkName:'videoClaim' */ '@/views/modules/VideoClaim/Claim/feeSettlement/index.vue')
    },
    {
      path: '/videoClaim/VideoServer',
      component: () => import(/* webpackChunkName:'videoClaim' */ '@/views/modules/VideoClaim/VideoServer/index.vue')
    }
  ]
}
