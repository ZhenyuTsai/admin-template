<template>
  <div class="test">
    测试子页面
    {{time | formatDate}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: new Date()
    }
  },
  mounted () {
    // console.log('#', $, $('#app'))
  }
}
</script>

<style>

</style>
