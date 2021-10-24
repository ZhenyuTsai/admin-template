<template>
  <div class="layout">
    <z-header></z-header>
    <z-aside :menusList="menus"></z-aside>
    <z-main>
      <router-view/>
    </z-main>
  </div>
</template>

<script>
import header from './header'
import aside from './aside'
import main from './main'
export default {
  components: {
    'z-aside': aside,
    'z-header': header,
    'z-main': main
  },
  computed: {
    menus () {
      // return this.$store.getters.menus
      return [
        {
          path: '/home',
          icon: 'el-icon-eleme',
          name: '首页',
          children: []
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.layout{
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 60px 1fr;
}
</style>
