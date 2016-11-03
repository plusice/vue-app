import 'scss/common.scss';
import Vue from 'vue'; 
import Router from 'vue-router';
import VueI18n from 'vue-i18n';
import hdpVueComponents from 'hdp-vue-components';

import langes from './i18n-lang';

import App from './app/App.vue';
import Index from './app/Index.vue';


Vue.use(Router);
Vue.use(VueI18n);
Vue.use(hdpVueComponents.components);
Vue.config.lang = 'en';


// set langes
Object.keys(langes).forEach(function (lang) {
  Vue.locale(lang, langes[lang])
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