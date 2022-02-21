/**
 * @Version
 * @Author ZhenYuTsai
 * @Descripttion
 * @Date 2022-02-21 15:06:36
 * @LastEditors ZhenYuTsai
 */
import Layout from '@/components/layout/index.vue'
export default {
  path: '/videoPreservation',
  component: Layout,
  redirect: '/videoPreservation/integratedQuery',
  meta: {
    role: ['admin']
  }, // 页面需要的权限
  children: [
    {
      path: '/videoPreservation/integratedQuery',
      component: () => import(/* webpackChunkName:'videoPreservation' */ '@/views/modules/VideoPreservation/Preservation/integratedQuery/index.vue')
    },
    {
      path: '/videoPreservation/taskAdmin',
      component: () => import(/* webpackChunkName:'videoPreservation' */ '@/views/modules/VideoPreservation/Preservation/taskAdmin/index.vue')
    },
    {
      path: '/videoPreservation/taslHandle',
      component: () => import(/* webpackChunkName:'videoPreservation' */ '@/views/modules/VideoPreservation/Preservation/taslHandle/index.vue')
    },
    {
      path: '/videoPreservation/VideoServer',
      component: () => import(/* webpackChunkName:'videoPreservation' */ '@/views/modules/VideoPreservation/VideoServer/index.vue')
    }
  ]
}
