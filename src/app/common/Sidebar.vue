<template src="./Sidebar.tpl"></template>

<style></style>

<script>
	export default {

		replace: false,

		name: 'Sidebar',

		data () {
			return {
				links: [{
					name: 'modal',
					iconClass: 'am-icon-file',
					url: '/modal'
				}]
			}
		}

	};
</script>