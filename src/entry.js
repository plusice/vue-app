import Vue from 'vue'; 
import Router from 'vue-router';

import App from 'app/App.vue';
import Index from 'app/Index.vue';

Vue.use(Router);

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