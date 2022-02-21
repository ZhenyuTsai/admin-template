/**
 * @Version
 * @Author ZhenYuTsai
 * @Descripttion
 * @Date 2022-02-21 15:04:53
 * @LastEditors ZhenYuTsai
 */

import Layout from '@/components/layout/index.vue'
export default {
  path: '/artificialExamine',
  component: Layout,
  redirect: '/artificialExamine/queryList',
  meta: {
    role: ['admin']
  }, // 页面需要的权限
  children: [
    {
      path: '/artificialExamine/examineAppeal',
      component: () => import(/* webpackChunkName:'artificialExamine' */ '@/views/modules/ArtificialExamine/examineAppeal/index.vue')
    },
    {
      path: '/artificialExamine/examineDetail',
      component: () => import(/* webpackChunkName:'artificialExamine' */ '@/views/modules/ArtificialExamine/examineDetail/index.vue')
    },
    {
      path: '/artificialExamine/queryList',
      component: () => import(/* webpackChunkName:'artificialExamine' */ '@/views/modules/ArtificialExamine/queryList/index.vue')
    }
  ]
}
