import dayjs from 'dayjs'

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
