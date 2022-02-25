<template>
  <div class="main">
    <div>
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
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  .content{
    padding: 0 20px;
    overflow: auto;
  }
}
</style>
