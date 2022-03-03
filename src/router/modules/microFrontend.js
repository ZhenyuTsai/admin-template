/**
 * @Version
 * @Author ZhenYuTsai
 * @Descripttion
 * @Date 2022-02-28 15:57:27
 * @LastEditors ZhenYuTsai
 */
import Layout from '@/components/layout/index.vue'
export default {
  path: '/integrate',
  component: Layout,
  redirect: '/home',
  meta: {
    role: ['admin'],
    title: '单点登录'
  },
  children: [
    {
      path: '/microFrontend/:proxy/:url*',
      component: () => import(/* webpackChunkName:'microFrontend' */ '@/views/modules/MicroFrontend/index.vue'),
      meta: {
        role: ['admin'],
        noShowBreadcrumb: true
      },
      props: true
    },
    {
      path: '/integrate/admin',
      component: () => import(/* webpackChunkName:'microFrontend' */ '@/views/modules/MicroFrontend/admin/index.vue'),
      meta: {
        role: ['admin'],
        noShowBreadcrumb: false,
        title: '集成管理'
      },
      props: true
    }
  ]
}
