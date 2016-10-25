import Vue from 'vue'; 
import Router from 'vue-router';

import hdpVueComponents from 'hdp-vue-components';

import App from 'app/App.vue';
import Index from 'app/Index.vue';
import Modal from 'app/Modal.vue';

Vue.use(Router);
Vue.use(hdpVueComponents.components);

let router = new Router({});

router.map({
	'/index': {
		component: Index
	},
	'/modal': {
		component: Modal
	},
});

router.redirect({
    '/': '/index'
});
router.start(App, '#app');