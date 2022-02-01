import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//on importe la page css global
import './style/style.css'


new Vue({
  render: h => h(App),
}).$mount('#app')
