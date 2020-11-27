import date from '../plugins/date'
import currency from '../plugins/currency'

export const registerPlugins = Vue => {
  Vue.use(date)
  Vue.use(currency)
}
