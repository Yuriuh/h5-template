import clickOutside from '../directives/click-outside'
import drag from '../directives/drag'

export const registerDirectives = Vue => {
  Vue.directive('click-outside', clickOutside)
  Vue.directive('drag', drag)
}
