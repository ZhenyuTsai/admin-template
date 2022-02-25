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
    role: ['admin'],
    title: '监控管理'
  }, // 页面需要的权限
  children: [
    {
      path: '/monitorAdmin/interfaceData',
      component: () => import(/* webpackChunkName:'monitorAdmin' */ '@/views/modules/MonitorAdmin/DataMonitor/interfaceData/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '接口数据'
      }
    },
    {
      path: '/monitorAdmin/serverData',
      component: () => import(/* webpackChunkName:'monitorAdmin' */ '@/views/modules/MonitorAdmin/DataMonitor/serverData/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '服务数据'
      }
    },
    {
      path: '/monitorAdmin/taskData',
      component: () => import(/* webpackChunkName:'monitorAdmin' */ '@/views/modules/MonitorAdmin/DataMonitor/taskData/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '任务数据'
      }
    },
    {
      path: '/monitorAdmin/system',
      component: () => import(/* webpackChunkName:'monitorAdmin' */ '@/views/modules/MonitorAdmin/system/index.vue'),
      meta: {
        noShowBreadcrumb: false,
        title: '系统报表'
      }
    }
  ]
}
