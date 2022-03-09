<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <el-cascader v-model="value" :options="options" :props="{ expandTrigger: 'click' }" @change="handle"></el-cascader>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      value: '',
      options: []
    }
  },
  mounted () {
    console.log('121', $('#app'))
    console.log(process.env)
    fetch('http://localhost:3000/data').then(response => response.json())
      .then(res => {
        console.log(res, '111')
        this.options = res
      })
      .catch(e => console.log('Oops, error', e))
  },
  methods: {
    handle (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="less">
.home {
  text-align: center;
}
</style>
