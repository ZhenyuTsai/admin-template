export function formatDate (date, fmt = 'yyyy-MM-dd') {
  /**
   * date:需要格式化的日期Date()类型
   * fmt：日期格式 yyyy-MM-dd
   * @param  {[Date,str]} y [description]
   * @return {[type]}   [description]
   */
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

export function formatDatetime (date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  /**
   * date:需要格式化的日期Date()类型
   * fmt：日期格式 yyyy-MM-dd hh:mm:ss
   * @param  {[Date,str]} y [description]
   * @return {[type]}   [description]
   */
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

export function formatPercentile (val) {
  /**
   * @Description 处理金额千分号
   * @Param {value}
   * @Return {String}
   */
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
