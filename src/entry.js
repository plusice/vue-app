import Vue from 'vue'; 
import Router from 'vue-router';

import hdpVueComponents from 'hdp-vue-components';

import App from 'app/App.vue';
import Index from 'app/Index.vue';
import Modal from 'app/modal/modal.vue';
import Pagination from 'app/pagination/pagination.vue';
import DatetimePickder from 'app/datetime-picker/datetime-picker.vue';
import Taginput from 'app/taginput/taginput.vue';
import TypeAhead from 'app/type-ahead/type-ahead.vue';

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
	'/pagination': {
		component: Pagination	
	},
	'/datetimepicker': {
		component: DatetimePickder	
	},
	'/taginput': {
		component: Taginput	
	},
	'/typeahead': {
		component: TypeAhead	
	}
});

router.redirect({
    '/': '/index'
});
router.start(App, '#app');