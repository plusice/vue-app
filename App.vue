<template src="./App.tpl"></template>

<style></style>

<script>
	import Vue from 'vue';

	export default Vue.extend({
		replace: true,

		name: 'App',

		data () {
			return {
				text: 'hello world'
			}
		}
	});
</script>