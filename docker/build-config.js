#!/usr/bin/env node

/**
 * @Version
 * @Author ZhenYuTsai
 * @Descripttion
 * @Date 2022-03-08 11:26:06
 * @LastEditors ZhenYuTsai
 */
const fs = require('fs')
const path = require('path')
const NginxConfFile = require('nginx-conf').NginxConfFile
const axios = require('axios')

const modeItem = process.argv.find(item => item.includes('--mode='))
if (modeItem) {
  const mode = modeItem.replace('--mode=', '')
  const upstreamPath = path.join(__dirname, `../docker/${mode}/conf.d/upstream.conf`)
  const locationPath = path.join(__dirname, `../docker/${mode}/conf.d/location.conf`)
  fs.writeFileSync(upstreamPath, '')
  fs.writeFileSync(locationPath, '')
  axios.get('http://localhost:3000/list').then(({ data }) => {
    createUpStream(upstreamPath, data)
    createLocation(locationPath, data)
  })
}

function createUpStream (upstreamPath, data) {
  NginxConfFile.create(upstreamPath, function (err, conf) {
    if (err || !conf) {
      console.log(err)
    }
    data.forEach(item => {
      conf.nginx._add('upstream', `${item.proxy}_server`)
      item.upstream.forEach(element => {
        conf.nginx.upstream[conf.nginx.upstream.length - 1]._add('server', element)
      })
    })
  })
}

function createLocation (locationPath, data) {
  NginxConfFile.create(locationPath, function (err, conf) {
    if (err || !conf) {
      console.log(err)
    }

    data.forEach(item => {
      conf.nginx._add('location', `^~ /${item.proxy}`)
      conf.nginx.location[conf.nginx.location.length - 1]._add('include', '/etc/nginx/proxy.conf')
      conf.nginx.location[conf.nginx.location.length - 1]._add('proxy_pass', `http://${item.proxy}_server/${item.proxy}`)
      conf.nginx.location[conf.nginx.location.length - 1]._add('access_log', `logs/${item.proxy}-server-oms.log  main`)
    })
  })
}
