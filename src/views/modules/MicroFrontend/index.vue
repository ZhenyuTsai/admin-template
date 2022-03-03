<template>
  <section class="micro-frontend" id="micro-frontend" v-loading="loading"></section>
</template>
<script>
let _self
export default {
  props: {
    proxy: String,
    url: String
  },
  data () {
    return {
      loading: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      _self = this
      this.initpage()
    })
    window.addEventListener('message', ({ data }) => {
      console.log('data', 121212121)
    }, false)
  },
  methods: {
    initpage () {
      this.loading = true
      const query = this.$route.query
      let queryString = ''
      for (const key in query) {
        if (Object.hasOwnProperty.call(query, key)) {
          queryString = queryString + key + '=' + query[key] + '&'
        }
      }
      const token = this.$store.getters.getToken || ''
      let url = ''
      if (this.url) {
        const domain = window.atob(this.url)
        if (domain.includes('?')) {
          url = `${window.atob(this.url)}&token=${token}&${queryString}`
        } else {
          url = `${window.atob(this.url)}?token=${token}&${queryString}`
        }
      } else {
        url = `?token=${token}&${queryString}`
      }
      const dom = document.getElementById('micro-frontend')
      this.createIframe(dom, `/${this.proxy}/${url}`, () => { this.loading = false })
    },
    createIframe (dom, src, onload) {
      // 在document中创建iframe
      dom.innerHTML = null
      const iframe = document.createElement('iframe')
      // 设置iframe的样式
      iframe.style.width = '100%'
      iframe.style.height = '100%'
      iframe.style.margin = '0'
      iframe.style.padding = '0'
      iframe.style.overflow = 'hidden'
      iframe.style.border = 'none'
      iframe.style.position = 'absolute'
      iframe.style.top = '0'
      // 绑定iframe的onload事件,处理事件的兼容问题
      if (onload && Object.prototype.toString.call(onload) === '[object Function]') {
        if (iframe.attachEvent) {
          iframe.attachEvent('onload', onload)
        } else if (iframe.addEventListener) {
          iframe.addEventListener('load', onload)
        } else {
          iframe.onload = onload
        }
      }
      iframe.src = src
      // 把iframe载入到dom以下
      dom.appendChild(iframe)
      return iframe
    }
  },
  watch: {
    $route: {
      deep: true,
      handler: () => {
        _self.initpage()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.micro-frontend {
  width: 100%;
  min-height: calc(100vh - 60px);
  position: relative;
}
iframe {
  box-sizing: border-box;
}
</style>
