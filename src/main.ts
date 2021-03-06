import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import ProductDisplay from '@/components/ProductDisplay.vue'
import Nav from '@/components/Nav.vue'
import TopNav from '@/components/TopNav.vue'


Vue.component('ProductDisplay',ProductDisplay);
Vue.component('Nav',Nav);
Vue.component('TopNav',TopNav);




Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
