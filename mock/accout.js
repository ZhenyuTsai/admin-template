export default {
  // 登录
  login () {
    return {
      code: 0,
      message: '成功',
      content: {
        result: '0',
        resultMessage: null,
        userNo: 'admin',
        userName: '测试',
        comCode: '86',
        token: '68915b1cf4814329bf4108e553e40a05',
        comName: '总公司'
      }
    }
  },
  check () {
    return {
      code: 0,
      message: '成功',
      content: {
        token: '41b72b6ee6ab4349a40db3dec696c5cf'
      }
    }
  },
  logout () {
    return {
      code: 0,
      message: '退出成功',
      content: {
        token: ''
      }
    }
  },
  getInfo () {
    return {
      code: 0,
      message: '成功',
      content: {
        name: 'admin',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        introduction: '管理员',
        roles: ['admin']
      }
    }
  },
  getMenus () {
    return {
      content: {
        menusList: [
          {
            path: '/home',
            icon: 'el-icon-eleme',
            name: '首页',
            children: []
          },
          {
            path: '/microFrontend/blog/',
            icon: 'el-icon-eleme',
            name: '前端E站',
            children: []
          },
          {
            path: '/microFrontend/claims/Iy9yZXBvcnRSZWdpc3RyYXRpb24=',
            icon: 'el-icon-eleme',
            name: '理赔管理',
            children: []
          },
          {
            path: '/videoPreservation',
            icon: 'el-icon-goods',
            name: '保全',
            children: [
              {
                path: '/videoPreservation/taskAdmin',
                icon: 'el-icon-eleme',
                name: '任务管理',
                children: []
              },
              {
                path: '/videoPreservation/taslHandle',
                icon: 'el-icon-eleme',
                name: '任务办理',
                children: []
              },
              {
                path: '/videoPreservation/integratedQuery',
                icon: 'el-icon-eleme',
                name: '综合查询',
                children: []
              },
              {
                path: '/videoPreservation/VideoServer',
                icon: 'el-icon-eleme',
                name: '视频服务',
                children: []
              }
            ]
          },
          {
            path: '/videoClaim',
            icon: 'el-icon-goods',
            name: '核赔核保',
            children: [
              {
                path: '/videoClaim/taskAdmin',
                icon: 'el-icon-eleme',
                name: '任务管理',
                children: []
              },
              {
                path: '/videoClaim/taslHandle',
                icon: 'el-icon-eleme',
                name: '任务办理',
                children: []
              },
              {
                path: '/videoClaim/integratedQuery',
                icon: 'el-icon-eleme',
                name: '综合查询',
                children: []
              },
              {
                path: '/videoClaim/feeSettlement',
                icon: 'el-icon-eleme',
                name: '调查费用结算',
                children: []
              },
              {
                path: '/videoClaim/VideoServer',
                icon: 'el-icon-eleme',
                name: '视频服务',
                children: []
              }
            ]
          },
          {
            path: '/userAdmin',
            icon: 'el-icon-goods',
            name: '用户管理',
            children: [
              {
                path: '/userAdmin/department',
                icon: 'el-icon-eleme',
                name: '部门管理',
                children: []
              },
              {
                path: '/userAdmin/menu',
                icon: 'el-icon-eleme',
                name: '菜单管理',
                children: []
              },
              {
                path: '/userAdmin/role',
                icon: 'el-icon-eleme',
                name: '角色管理',
                children: []
              },
              {
                path: '/userAdmin/user',
                icon: 'el-icon-eleme',
                name: '用户管理',
                children: []
              }
            ]
          },
          {
            path: '/systemAdmin',
            icon: 'el-icon-goods',
            name: '系统管理',
            children: [
              {
                path: '/systemAdmin/changePassword',
                icon: 'el-icon-eleme',
                name: '修改密码',
                children: []
              },
              {
                path: '/systemAdmin/Notification',
                icon: 'el-icon-eleme',
                name: '通知管理',
                children: [
                  {
                    path: '/systemAdmin/mail',
                    icon: 'el-icon-eleme',
                    name: '邮件',
                    children: []
                  },
                  {
                    path: '/systemAdmin/official',
                    icon: 'el-icon-eleme',
                    name: '公众号',
                    children: []
                  },
                  {
                    path: '/systemAdmin/sms',
                    icon: 'el-icon-eleme',
                    name: '短信',
                    children: []
                  },
                  {
                    path: '/systemAdmin/station',
                    icon: 'el-icon-eleme',
                    name: '站内信',
                    children: []
                  }
                ]
              },
              {
                path: '/systemAdmin/reserveConfig',
                icon: 'el-icon-eleme',
                name: '预约时间配置',
                children: []
              },
              {
                path: '/systemAdmin/ruleConfig',
                icon: 'el-icon-eleme',
                name: '分配规则配置',
                children: []
              }
            ]
          },
          {
            path: '/monitorAdmin',
            icon: 'el-icon-goods',
            name: '监控管理',
            children: [
              {
                path: '/monitorAdmin/system',
                icon: 'el-icon-eleme',
                name: '系统报表',
                children: []
              },
              {
                path: '/monitorAdmin/DataMonitor',
                icon: 'el-icon-eleme',
                name: '通知管理',
                children: [
                  {
                    path: '/monitorAdmin/interfaceData',
                    icon: 'el-icon-eleme',
                    name: '接口数据',
                    children: []
                  },
                  {
                    path: '/monitorAdmin/serverData',
                    icon: 'el-icon-eleme',
                    name: '服务数据',
                    children: []
                  },
                  {
                    path: '/monitorAdmin/taskData',
                    icon: 'el-icon-eleme',
                    name: '任务数据',
                    children: []
                  }
                ]
              }
            ]
          },
          {
            path: '/artificialExamine',
            icon: 'el-icon-goods',
            name: '人工质检',
            children: [
              {
                path: '/artificialExamine/examineAppeal',
                icon: 'el-icon-eleme',
                name: '质检申诉',
                children: []
              },
              {
                path: '/artificialExamine/examineDetail',
                icon: 'el-icon-eleme',
                name: '质检详情',
                children: []
              },
              {
                path: '/artificialExamine/queryList',
                icon: 'el-icon-eleme',
                name: '查询列表',
                children: []
              }
            ]
          }
        ],
        resultMessage: '获取成功',
        result: '0'
      },
      message: '成功',
      code: 0
    }
  }
}
