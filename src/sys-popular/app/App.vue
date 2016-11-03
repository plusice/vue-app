<template src="./App.tpl"></template>

<style></style>

<script>
	import Header from 'components/Header.vue';
	import Sidebar from 'components/Sidebar.vue';
	import Footer from 'components/Footer.vue';

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