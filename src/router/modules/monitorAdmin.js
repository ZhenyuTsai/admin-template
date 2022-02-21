/**
 * @Version
 * @Author ZhenYuTsai
 * @Descripttion
 * @Date 2022-02-21 15:05:06
 * @LastEditors ZhenYuTsai
 */
import Layout from '@/components/layout/index.vue'
export default {
  path: '/monitorAdmin',
  component: Layout,
  redirect: '/monitorAdmin/system',
  meta: {
    role: ['admin']
  }, // 页面需要的权限
  children: [
    {
      path: '/monitorAdmin/interfaceData',
      component: () => import(/* webpackChunkName:'monitorAdmin' */ '@/views/modules/MonitorAdmin/DataMonitor/interfaceData/index.vue')
    },
    {
      path: '/monitorAdmin/serverData',
      component: () => import(/* webpackChunkName:'monitorAdmin' */ '@/views/modules/MonitorAdmin/DataMonitor/serverData/index.vue')
    },
    {
      path: '/monitorAdmin/taskData',
      component: () => import(/* webpackChunkName:'monitorAdmin' */ '@/views/modules/MonitorAdmin/DataMonitor/taskData/index.vue')
    },
    {
      path: '/monitorAdmin/system',
      component: () => import(/* webpackChunkName:'monitorAdmin' */ '@/views/modules/MonitorAdmin/system/index.vue')
    }
  ]
}
