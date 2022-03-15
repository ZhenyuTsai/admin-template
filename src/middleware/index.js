/**
 * @Version
 * @Author ZhenYuTsai
 * @Descripttion
 * @Date 2021-10-24 09:57:51
 * @LastEditors ZhenYuTsai
 */
import general from './general'
import permission from './permission'
export default (Vue) => {
  permission(Vue)
  general(Vue)
}
