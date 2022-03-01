/**
 * @Version
 * @Author ZhenYuTsai
 * @Descripttion
 * @Date 2022-02-28 15:57:27
 * @LastEditors ZhenYuTsai
 */
export default {
  path: '/microFrontend/:proxy/:url*',
  component: () => import(/* webpackChunkName:'test' */ '@/views/MicroFrontend/index.vue'),
  meta: {
    role: ['admin'],
    noShowBreadcrumb: true
  },
  props: true
}
