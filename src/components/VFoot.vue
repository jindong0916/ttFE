<template>
  <tabbar style="position:fixed">
    <tabbar-item :link="{path:'/'}" :selected="$route.path === '/'">
      <img slot="icon" src="~assets/wxapp/image/ic_nav_index_normal.png">
      <img slot="icon-active" src="~assets/wxapp/image/ic_nav_index_active.png">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/application'}" :selected="$route.path === '/application'">
      <img slot="icon" src="~assets/wxapp/image/ic_nav_app_normal.png">
      <img slot="icon-active" src="~assets/wxapp/image/ic_nav_app_active.png">
      <span slot="label">应用</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/discovery'}" :selected="$route.path === '/discovery'">
      <img slot="icon" src="~assets/wxapp/image/ic_nav_discover_normal.png">
      <img slot="icon-active" src="~assets/wxapp/image/ic_nav_discover_active.png">
      <span slot="label">发现</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/mySetting'}" :selected="$route.path === '/mySetting'">
      <img slot="icon" src="~assets/wxapp/image/ic_nav_me_normal.png">
      <img slot="icon-active" src="~assets/wxapp/image/ic_nav_me_active.png">
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vux'

  export default {
    name: 'foot',
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped>
  .weui-tabbar {
    background-color: #ffffff !important;
  }
</style>
