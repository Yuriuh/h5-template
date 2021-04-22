import { Button, Tab, Tabs, Overlay, Toast, List, PullRefresh, Cell, DatetimePicker, Popup } from 'vant'

const registerVenderComponents = Vue => {
  Vue.use(Button)
  Vue.use(Tab)
  Vue.use(Tabs)
  Vue.use(Overlay)
  Vue.use(List)
  Vue.use(PullRefresh)
  Vue.use(Toast)
  Vue.use(Cell)
  Vue.use(DatetimePicker)
  Vue.use(Popup)
}

// { tag: '', vue: someComponent }
const customComponents = []

const registerCustomComponents = (Vue, components) => {
  components.map(component => {
    return Vue.component(component.tag, component.vue)
  })
}

export const registerComponents = Vue => {
  registerCustomComponents(Vue, customComponents)
  registerVenderComponents(Vue)
}
