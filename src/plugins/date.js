import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn') // 全局使用简体中文

const InvalidReturn = ''

export default {
  install(Vue) {
    Vue.filter('dateFormat', (value, ...params) => {
      const d = dayjs(value)
      if (!d.isValid()) return InvalidReturn
      return d['format'].apply(d, params)
    })
  },
}
