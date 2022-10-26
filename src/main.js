import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import viewFullScreen from "view-full-screen"

Vue.use(viewFullScreen)

new Vue({
  render: h => h(App),
}).$mount('#app')
