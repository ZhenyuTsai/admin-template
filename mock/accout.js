export default {
  // 登录
  login () {
    return {
      code: 0,
      message: '成功',
      content: {
        result: '0',
        resultMessage: '登录成功！',
        appid: 'isc',
        comcode: '003',
        token: '41b72b6ee6ab4349a40db3dec696c5cf'
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
            path: '/',
            icon: 'el-icon-user',
            name: '测试管理',
            children: [
              {
                path: '/foo',
                icon: 'el-icon-eleme',
                name: '无服务',
                children: []
              },
              {
                path: '/test/item',
                icon: 'el-icon-setting',
                name: '测试页面',
                children: []
              }
            ]
          },
          {
            path: '/item',
            icon: 'el-icon-goods',
            name: '商品',
            children: []
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
