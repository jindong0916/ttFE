<template>
  <div class="rating-page">
    <x-header>个人中心</x-header>

    <div class="container">
      <group>
        <div class="news-wrap">
          <cell title="头像" is-link value-align="right">
            <img width="50" style="display:block;margin-right:5px;"
                 :src="user.photo">
          </cell>
          <cell title="用户名" :value="user.name" is-link></cell>
          <cell title="账号" :value="user.account"></cell>
          <cell title="地址" is-link :value="user.address"></cell>
        </div>
      </group>

      <group title="账号绑定">
        <cell title="手机" is-link :value="user.telephone">
        </cell>
      </group>

      <group title="安全设置">
        <cell title="修改密码" link="/editPassword"></cell>
      </group>
    </div>


    <!--<transition name="router-slid" mode="out-in">-->
      <!--<router-view></router-view>-->
    <!--</transition>-->
  </div>
</template>

<script>
  import {Group, Cell, XHeader, GroupTitle} from 'vux'

  export default {
    name: 'OwnSpace',
    components: {
      GroupTitle,
      Group,
      Cell,
      XHeader
    },
    computed: {
      user () {
        return this.$store.state.user
      }
    }
  }
</script>

<style>
  .rating-page{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;
    z-index: 501;
  }
  .container {
    padding: 45px 0 0 0;
  }
  .router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
  }
  .router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
</style>
