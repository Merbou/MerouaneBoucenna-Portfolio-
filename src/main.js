import Vue from 'vue'
import App from './App.vue'
import bootstrap from './plugins/bootstrap'
import zoom from './plugins/zoom'
import slider from './plugins/slider'
bootstrap;
slider;
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  zoom
}).$mount('#app')
