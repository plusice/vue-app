<app-header></app-header>

<div class="am-cf admin-main">
  <!-- sidebar start -->
  <app-sidebar></app-sidebar>
  <!-- sidebar end -->

  <!-- content start -->
  <div class="admin-content">
    <div class="admin-content-body" style="padding:20px;">
      
      <router-view></router-view>

    </div>
  </div>
  <!-- content end -->

</div>

<app-footer></app-footer>