import { Button, Swipe, SwipeItem, Tabs, Tab } from 'vant'

const registerVenderComponents = Vue => {
  Vue.use(Button)
  Vue.use(Swipe)
  Vue.use(SwipeItem)
  Vue.use(Tab)
  Vue.use(Tabs)
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
