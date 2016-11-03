import 'scss/common.scss';
import Vue from 'vue'; 
import Router from 'vue-router';
import VueI18n from 'vue-i18n';

import hdpVueComponents from 'hdp-vue-components';

import App from './app/App.vue';
import Index from './app/Index.vue';

Vue.use(Router);
Vue.use(VueI18n);
Vue.use(hdpVueComponents.components);
Vue.config.lang = 'ch'
let locales = {
	'ch': {
		message: {
			hello: '你好中文'
		}
	},
	'en': {
		message: {
			hello: 'hello en'
		}	
	}
};
// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})



let router = new Router({});

router.map({
	'/index': {
		component: Index
	}
});

router.redirect({
    '/': '/index'
});
router.start(App, '#app');