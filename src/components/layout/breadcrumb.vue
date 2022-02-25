<template>
  <el-breadcrumb v-if="!route.meta.noShowBreadcrumb" class="breadcrumb" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item,index) in breadCrumbList" :key="item.path" :to="breadCrumbList.length-1===index?'':item.path">{{item.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  computed: {
    breadCrumbList () {
      return this.$route.matched.map(item => {
        return {
          path: item.path,
          title: item.meta.title
        }
      })
    },
    route () {
      return this.$route
    }
  }
}
</script>

<style lang="less" scoped>
.breadcrumb{
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
}
</style>
