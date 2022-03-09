const plugins = []

if (process.env.NODE_ENV === 'production') {
  // 生产环境，去掉console;保留console.err 和console.warn
  plugins.push(['transform-remove-console', { exclude: ['error', 'warn'] }])
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
}
