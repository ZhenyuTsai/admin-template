<template>
  <div :class="{layout:isNative}">
    <z-header v-if="isNative"></z-header>
    <z-aside v-if="isNative" :menusList="menus"></z-aside>
    <z-main v-if="isNative">
      <router-view/>
    </z-main>
    <router-view v-else />
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
      return this.$store.getters.menus
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
