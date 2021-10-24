import User from '@/api/user'
import router, { resetRouter } from '@/router'
import Cookies from 'js-cookie'
const TokenKey = 'Admin-Token'
const state = {
  token: Cookies.get(TokenKey),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  menus: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_MENUS: (state, menus) => {
    state.menus = menus
  }
}

const actions = {
  // 用户登录
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      User.login({ username: username.trim(), password: password }).then(async res => {
        Cookies.set(TokenKey, res.token)
        commit('SET_TOKEN', res.token)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 获取用户信息
  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      User.getInfo({ token: state.token }).then(res => {
        if (!res) {
          reject(new Error('Verification failed, please Login again.'))
        }

        const { roles, name, avatar, introduction } = res

        if (!roles || roles.length <= 0) {
          reject(new Error('getInfo: roles must be a non-null array!'))
        }
        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 用户退出
  logout ({ commit, state }) {
    return new Promise((resolve, reject) => {
      User.logout({ token: state.token }).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        Cookies.remove(TokenKey)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 删除token
  resetToken ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      Cookies.remove(TokenKey)
      resolve()
    })
  },

  // 获取导航
  getMenus ({ commit, state }) {
    return new Promise((resolve, reject) => {
      User.getMenus({ token: state.token }).then((res) => {
        commit('SET_MENUS', res.menusList)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 动态修改权限
  changeRoles ({ commit, dispatch }, role) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      Cookies.set(TokenKey, token)
      const { roles } = await dispatch('getInfo')
      resetRouter()
      // 根据角色生成可访问的路线图
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // 动态添加可访问的路由
      router.addRoutes(accessRoutes)

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
