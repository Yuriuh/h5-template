import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')
dayjs.extend(localizedFormat)

const InvalidReturn = ''

/**
 * eg1: <span>{{ xxDate | dateFormat('YYYY/MM/DD') }}</span>
 */

export default {
  install(Vue) {
    Vue.filter('dateFormat', (value, ...params) => {
      const d = dayjs(value)
      if (!d.isValid()) return InvalidReturn
      return d['format'].apply(d, params)
    })
  },
}
