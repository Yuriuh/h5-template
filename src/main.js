import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import './styles/index.scss'
import { registerComponents } from './utils/register-components'
import { registerPlugins } from './utils/register-plugins'

registerComponents(Vue)
registerPlugins(Vue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
