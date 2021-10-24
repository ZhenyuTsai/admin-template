/**
 * @author ZhenYuTsai
 * @description 格式化日期
 * @return {Sting} 格式后的日期
 * @lastEditors ZhenYuTsai
 * @param {[Date,Number]} val 需要格式化的日期Date()类型
 * @param {String} fmt 格式模板，默认'yyyy-MM-dd'
 */
export function formatDate (val, fmt = 'yyyy-MM-dd') {
  const date = new Date(val)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length))
    }
  }
  return fmt
}
/**
 * @author ZhenYuTsai
 * @description 格式化日期时间
 * @return {Sting} 格式后的日期时间
 * @lastEditors ZhenYuTsai
 * @param {[Date,Number]} val 需要格式化的日期Date()类型
 * @param {String} fmt 格式模板，默认'yyyy-MM-dd hh:mm:ss'
 */
export function formatDatetime (val, fmt = 'yyyy-MM-dd hh:mm:ss') {
  const date = new Date(val)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length))
    }
  }
  return fmt
}
/**
 * @author ZhenYuTsai
 * @description 处理金额千分号
 * @return {String} 千分号分隔的值
 * @lastEditors ZhenYuTsai
 * @param {[Number,String]} value
 */
export function formatPercentile (value) {
  let val = value
  val = val.toString().replace(/\$|,/g, '')
  if (isNaN(val)) {
    val = '0'
  }
  const sign = (val === (val = Math.abs(val)))
  val = Math.floor(val * 100 + 0.50000000001)
  let cents = val % 100
  val = Math.floor(val / 100).toString()
  if (cents < 10) {
    cents = '0' + cents
  }
  for (var i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
    val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3))
  }
  return (((sign) ? '' : '-') + val + '.' + cents)
}

export default {
  formatDate,
  formatDatetime,
  formatPercentile
}
