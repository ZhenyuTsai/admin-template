<template>
    <el-tabs class="integrate-admin" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label=" DEV环境 " name="first">
        <env-list mode="dev"></env-list>
      </el-tab-pane>
      <el-tab-pane label=" SIT环境 " name="second">
        <env-list mode="sit"></env-list>
      </el-tab-pane>
      <el-tab-pane label=" UAT环境 " name="third">
        <env-list mode="uat"></env-list>
      </el-tab-pane>
      <el-tab-pane label=" STG环境 " name="fourth">
        <env-list mode="stg"></env-list>
      </el-tab-pane>
      <el-tab-pane label=" PRD环境 " name="fifth">
        <env-list mode="prd"></env-list>
      </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  components: {
    envList: () => import('./components/envList.vue')
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick () {

    }
  }
}
</script>

<style lang="less" scoped>
.integrate-admin{
  padding: 0 20px;
  /deep/.el-tabs__item::before {
    content: '***';
    display: inline-block;
    opacity: 0;
  }
  /deep/.el-tabs__item::after {
    content: '***';
    display: inline-block;
    opacity: 0;
  }
}
</style>
