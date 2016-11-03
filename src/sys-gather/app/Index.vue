<template src="./Index.tpl"></template>

<style></style>

<script>
    import Vue from 'vue';
    // import $ from 'jquery';
    import echarts from 'echarts';
    import datetimepicker from 'datetimepicker';

    export default {
        replace: true,

        name: 'Index',

        data () {
            return {
                text: this.$t('message.hello')
            }
        },

        route: {
            data (transition) {
                setTimeout(() => {
                    transition.next({text: this.$t('message.hello') + '111'})
                },2000)
            }
        },

        ready () {
            $('#dateInput').datetimepicker({
                ignoreReadonly: true,
                viewMode: self.dateViewMode || 'days',
                format: self.dateFormat || 'YYYY-MM-DD',
                locale: 'zh-cn'
            });
        }
    };
</script>