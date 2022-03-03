<template>
  <div class="main">
    <div class="top">
      <z-bread-crumb></z-bread-crumb>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import breadcrumb from './breadcrumb.vue'
export default {
  components: {
    'z-bread-crumb': breadcrumb
  }
}
</script>

<style lang="less" scoped>
.main{
  height: 100%;
  overflow: auto;
  .top{
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
    background: #fff;
  }
}
</style>
