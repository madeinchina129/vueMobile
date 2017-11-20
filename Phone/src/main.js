// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/css/index.css"

import "./assets/css/swiper.min.css"
import "./assets/js/swiper.min"
import VueLazyload from 'vue-lazyload'

//h
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-default/index.css';

Vue.use(ElementUI)
// Vue.use(VueLazyload)
Vue.config.productionTip = false


Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './static/images/arc1_8.png',
  loading: './static/images/loading.gif',
  attempt: 1
});


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router:router,
  template: '<App/>',
  components: { App }
})




/*// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App'
import router from './router/index'
import "./assets/css/me.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
// import VueResource from 'vue-resource'


// Vue.use(VueResource)

Vue.use(ElementUI)

Vue.config.productionTip = false*/








