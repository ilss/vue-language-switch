import Vue from 'vue';
import App from './App.vue';
import i18n from './lang';
import seduLanguageSwitch from './lib/';
Vue.config.productionTip = false; // 设置为 false 以阻止 vue 在启动时生成生产提示

Vue.use(seduLanguageSwitch);
new Vue({
  el: '#app',
  i18n,
  render: h => h(App),
});
