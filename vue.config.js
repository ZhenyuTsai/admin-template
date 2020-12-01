const FileManagerPlugin = require('filemanager-webpack-plugin')
const webpack = require('webpack')
const fileManagerPlugin = new FileManagerPlugin({
  events: {
    onEnd: {
      archive: [
        {
          source: './dist',
          destination: './dist/dist.tar.gz',
          format: 'tar'
        }]
    }
  }
})
const webpackProvidePlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
})
module.exports = {
  publicPath: './',
  configureWebpack: config => {
    config.plugins.push(webpackProvidePlugin)
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(fileManagerPlugin)
    }
  }
}
