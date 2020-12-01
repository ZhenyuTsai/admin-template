<template>
  <div class="header">
    <div class="logo"><img src="@/assets/header-logo.svg"></div>
    <div class="user-info">
      <span>管理员</span>
      <el-dropdown trigger="click"  @command="handleCommand">
        <span class="el-dropdown-link">
          我的账号 <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async handleCommand (command) {
      if (command === 'logout') {
        await this.$store.dispatch('user/logout')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header{
  background-color: #B3C0D1;
  vertical-align: middle;
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  justify-content: space-between;
  .logo{
    padding-top: 11px;
    padding-left: 25px;
  }
  .user-info{
    height: 60px;
    line-height: 60px;
    padding-right: 25px;
    font-size: 16px;
    color: #606266;
    .el-dropdown{
      padding-left: 25px;
      .el-dropdown-link{
        font-size: 16px;
      }
    }

  }
}
</style>
