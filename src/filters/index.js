/**
 * @Version
 * @Author ZhenYuTsai
 * @Descripttion
 * @Date 2021-10-24 11:23:40
 * @LastEditors ZhenYuTsai
 */
import Util from '@/utils/index.js'
export default (Vue) => {
  Vue.prototype.$util = Util
  Vue.filter('formatDate', Util.formatDate)
  Vue.filter('formatDatetime', Util.formatDatetime)
}
