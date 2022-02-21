const Account = require('./accout').default
const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')
const mock = new MockAdapter(axios)
if (process.env.VUE_APP_USE_MOCK === 'true') {
  mock.onPost('user/login').reply(200, Account.login())
  mock.onPost('user/getInfo').reply(200, Account.getInfo())
  mock.onPost('user/getMenus').reply(200, Account.getMenus())
  mock.onPost('user/logout').reply(200, Account.getMenus())
}
