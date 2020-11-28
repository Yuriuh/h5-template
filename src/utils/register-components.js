import { Button, Tab, Tabs, Overlay, Toast } from 'vant'

const registerVenderComponents = Vue => {
  Vue.use(Button)
  Vue.use(Tab)
  Vue.use(Tabs)
  Vue.use(Overlay)
  Vue.use(Toast)
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
