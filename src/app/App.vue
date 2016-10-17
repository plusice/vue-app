<template src="./App.tpl"></template>

<style></style>

<script>
	import Header from './common/Header.vue';
	import Sidebar from './common/Sidebar.vue';
	import Footer from './common/Footer.vue';

	export default {

		replace: false,

		name: 'App',

		components: {
			AppHeader: Header,
			AppSidebar: Sidebar,
			AppFooter: Footer
		}

	};

</script>