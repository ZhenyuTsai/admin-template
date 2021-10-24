<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  mounted () {
    console.log('121', $('#app'))
    console.log(process.env)
  }
}
</script>

<style lang="less">
.home{
  text-align: center;
}
</style>
