<template>
  <div>
    <x-header :left-options="{showBack: false}">发现</x-header>

    <div class="container">
      <group>
        <cell title="朋友圈" link="/discovery/disIndex">
          <img slot="icon" width="30" style="display:block;margin-right:5px;" src="~assets/wxapp/default-head-img.jpeg">
        </cell>
      </group>

      <group>
        <div class="news-wrap">
          <cell title="扫一扫" link="/discovery/disIndex">
            <img slot="icon" width="30" style="display:block;margin-right:5px;" src="~assets/wxapp/default-head-img.jpeg">
          </cell>
          <cell title="摇一摇" link="/discovery/disIndex">
            <img slot="icon" width="30" style="display:block;margin-right:5px;" src="~assets/wxapp/default-head-img.jpeg">
          </cell>
          <cell title="看一看" link="/discovery/disIndex">
            <img slot="icon" width="30" style="display:block;margin-right:5px;" src="~assets/wxapp/default-head-img.jpeg">
          </cell>
          <cell title="搜一搜" link="/discovery/disIndex">
            <img slot="icon" width="30" style="display:block;margin-right:5px;" src="~assets/wxapp/default-head-img.jpeg">
          </cell>
        </div>
      </group>

      <group>
        <div class="news-wrap">
          <cell title="附近的人" link="/discovery/disIndex">
            <img slot="icon" width="30" style="display:block;margin-right:5px;" src="~assets/wxapp/default-head-img.jpeg">
          </cell>
        </div>
      </group>

      <group>
        <div class="news-wrap">
          <cell title="购物" link="/discovery/disIndex">
            <img slot="icon" width="30" style="display:block;margin-right:5px;" src="~assets/wxapp/default-head-img.jpeg">
          </cell>
          <cell title="游戏" link="/discovery/disIndex">
            <img slot="icon" width="30" style="display:block;margin-right:5px;" src="~assets/wxapp/default-head-img.jpeg">
          </cell>
        </div>
      </group>

      <group>
        <cell title="小程序" link="/discovery/disIndex">
          <img slot="icon" width="30" style="display:block;margin-right:5px;" src="~assets/wxapp/default-head-img.jpeg">
        </cell>
      </group>
    </div>

    <v-foot></v-foot>

    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {XHeader, Group, Cell} from 'vux'
  import VFoot from 'components/VFoot'

  export default {
    name: 'discovery',
    components: {
      XHeader,
      Group,
      Cell,
      VFoot
    }
  }
</script>

<style scoped>
  .container {
    padding: 45px 0 60px 0;
  }
  .router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
  }
  .router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
</style>
