import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import './assets/scss/app.scss'

Vue.config.productionTip = false

Vue.use(VueResource)

new Vue({
  router,
  VueResource,
  store,
  render: h => h(App)
}).$mount('#app')
