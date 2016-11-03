<template>
    <header class="am-topbar am-topbar-inverse admin-header">
        <div class="am-topbar-brand">
            <strong>A207</strong>
        </div>

        <div class="am-collapse am-topbar-collapse" id="topbar-collapse">
            <div class="topbar-nav">
                <a href="/gather.html" :class="{active: appName === 'gather'}">{{ $t("nav.sysGather") }}</a>
                <a href="/social.html" :class="{active: appName === 'social'}">{{ $t("nav.sysSocial") }}</a>
                <a href="/popular.html" :class="{active: appName === 'popular'}">{{ $t("nav.sysPopular") }}</a>
            </div>

            <!-- <ul class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list">
                <li><a href="javascript:;"><span class="am-icon-envelope-o"></span> inbox <span class="am-badge am-badge-warning">5</span></a></li>
                <li class="am-dropdown" data-am-dropdown>
                    <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
                        <span class="am-icon-users"></span> admin <span class="am-icon-caret-down"></span>
                    </a>
                    <ul class="am-dropdown-content">
                        <li><a href="#"><span class="am-icon-cog"></span> setting</a></li>
                        <li><a href="#"><span class="am-icon-power-off"></span> log out</a></li>
                    </ul>
                </li>
            </ul> -->
        </div>
    </header>
</template>

<style></style>

<script>
    export default {

        replace: false,

        name: 'Header',

        props: {
            appName: String,
            default () {
                return 'gather'
            }
        }
    };
</script>