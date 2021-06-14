import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './components';

import './assets/sass/index.scss';

Vue.config.productionTip = false;

Vue.filter('dateTransform', (value) => {
  return new Date(Date.parse(value)).toLocaleDateString();
});

Vue.filter('rankNumber', (value) => {
  return value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
