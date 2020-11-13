import { Button, Swipe, SwipeItem } from 'vant'

const registerVenderComponents = Vue => {
  Vue.use(Button)
  Vue.use(Swipe)
  Vue.use(SwipeItem)
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
