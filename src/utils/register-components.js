import { Button, Tab, Tabs, Overlay, Toast, List, PullRefresh, Cell } from 'vant'

const registerVenderComponents = Vue => {
  Vue.use(Button)
  Vue.use(Tab)
  Vue.use(Tabs)
  Vue.use(Overlay)
  Vue.use(List)
  Vue.use(PullRefresh)
  Vue.use(Toast)
  Vue.use(Cell)
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
