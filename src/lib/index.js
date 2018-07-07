/*
 * @Author: Liang Liang
 * @Date: 2018-07-07 17:48:39
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-07 17:53:09
 * @Description: 
 */
import Vue from 'vue';
import i18n from '../lang';
import elementUI from 'element-ui';
import LanguageSwitch from './languageSwitch';

const comment = {
  install(Vue) {
    Vue.component('SeduLanguageSwitch', LanguageSwitch);
  },
};
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment);
}
Vue.use(elementUI, {
  i18n: (key, value) => i18n.t(key, value),
});
export default comment;
