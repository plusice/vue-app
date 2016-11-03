<template>
    <div class="admin-sidebar am-offcanvas" id="sidebar">
        <div class="am-offcanvas-bar admin-offcanvas-bar">
            <ul class="am-list admin-sidebar-list">
                <li v-for="lvl1Item in linkTree.links">
                    <template v-if="lvl1Item.links">
                        <a href="javascript:;" class="dropdownToggle" :class="{'sidebar-active': $route.path.indexOf(lvl1Item.url) >= 0}">
                            <span :class="lvl1Item.iconClass"></span>&nbsp;{{ $t(lvl1Item.name) }}
                        </a>
                        <ul class="am-list am-collapse admin-sidebar-sub" :class="{'am-in': $route.path.indexOf(lvl1Item.url) >= 0}">
                            <li v-for="lvl2Item in lvl1Item.links">
                                <a v-link="lvl2Item.url" :class="{'sidebar-active': $route.path.indexOf(lvl2Item.url) >= 0}"><span :class="lvl2Item.iconClass"></span>&nbsp;{{ $t(lvl2Item.name) }}</a>
                            </li>
                        </ul>
                    </template>
                    <a v-else v-link="lvl1Item.url" :class="{'sidebar-active': $route.path.indexOf(lvl1Item.url) >= 0}"><span :class="lvl1Item.iconClass"></span>&nbsp;{{ $t(lvl1Item.name) }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style></style>

<script>
    import $ from 'jquery';

    export default {

        replace: false,

        name: 'Sidebar',

        props: {
            linkTree: {
                type: Object,
                default () {
                    return {
                        // url: '/',
                        // links:[
                        //  {
                        //      name: 'index',
                        //      iconClass: 'am-icon-file',
                        //      url: '/index'
                        //  },
                        //  {
                        //      name: 'module1',
                        //      iconClass: 'am-icon-file',
                        //      url: '/module1',
                        //      links: [
                        //          {
                        //              name: 'module1-1',
                        //              iconClass: 'am-icon-file',
                        //              url: '/module1_1'
                        //          },
                        //          {
                        //              name: 'module1-2',
                        //              iconClass: 'am-icon-file',
                        //              url: '/module1_2'
                        //          }
                        //      ]
                        //  }
                        // ]
                    }
                }
            }
        },

        data () {
            return {}
        },

        ready () {
            $('#sidebar').on('click', '.dropdownToggle', function() {
                let $item = $(this).next();
                if ($item.hasClass('am-in')) {
                    $item.slideUp(300, function() {
                        $item.removeClass('am-in')
                    });
                } else {
                    $item.slideDown(300, function() {
                        $item.addClass('am-in')
                    });
                }
                return false;
            });
        }

    };
</script>