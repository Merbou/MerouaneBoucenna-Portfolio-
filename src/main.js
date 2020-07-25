import Vue from 'vue'
import App from './App.vue'
import particles from './plugins/particles'
import zoom from './plugins/zoom'
particles;

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  zoom
}).$mount('#app')
