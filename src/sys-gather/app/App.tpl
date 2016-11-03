<app-header app-name="gather"></app-header>

<div class="am-cf admin-main">
    
    <!-- use app-sidebar or write your self -->
    <app-sidebar :link-tree="sidebarTree"></app-sidebar>
    

    <!-- content start -->
    <div class="admin-content">
        <div class="admin-content-body">
            
            <router-view></router-view>

        </div>
    </div>
    <!-- content end -->

</div>

<app-footer></app-footer>