import { Button } from 'vant'

const registerVenderComponents = Vue => {
  Vue.use(Button)
}

const customComponents = []

const registerCustomComponents = (Vue, components) => {
  components.map(component => {
    Vue.component(component.tag, component.vue)
  })
}

export const registerComponents = Vue => {
  registerCustomComponents(Vue, customComponents)
  registerVenderComponents(Vue)
}
