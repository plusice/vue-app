<template src="./Modal.tpl"></template>

<style></style>

<script>
	


	module.exports = {

	    data: function() {
	        return {
	            showModal: false,
	            showAlert: false,
	            showConfirm: false,
	            showDialog: false,
	            alertMsg: {
	                title: 'alert',
	                content: 'alert content'
	            },
	            confirmMsg: {
	                title: 'confirm',
	                content: 'alert content',
	                cancelText: false
	            },
	            dialogMsg: {
	                title: 'finish your message',
	                confirmText: '提交'
	            },
	            username: 'hdp'
	        };
	    },

	    methods: {
	        clickAlert: function() {
	            this.showAlert = true;
	            this.alertMsg.title = this.alertMsg.title + 1;
	        },
	        clickAlertOK: function() {
	            this.showAlert = false;
	        },
	        clickConfirm: function() {
	            this.showConfirm = true;
	            this.confirmMsg.title = this.alertMsg.title + 1;
	        },
	        clickConfirmOK: function() {
	            console.log('yeah');
	            this.showConfirm = false;
	        },
	        clickConfirmCancel: function() {
	            console.log('no');
	            this.showConfirm = false;
	        },
	        clickDialog: function() {
	            this.showDialog = true;
	        },
	        clickDialogOK: function() {
	            this.showDialog = false;
	            console.log('submit name:' + this.username)
	        },
	        clickDialogCancel: function() {
	            this.showDialog = false;
	            console.log('cancel')
	        }
	    }

	};


</script>