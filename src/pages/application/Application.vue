<template>
  <div>
    <x-header :left-options="{showBack: false}">应用</x-header>

    <div class="container">
      <group-title>2 columns</group-title>
      <grid :cols="4">
        <grid-item label="应用"
                   v-for="i in 6"
                   :key="i">
          <img slot="icon"
               width="20"
               src="~assets/default-head-img.jpeg">
        </grid-item>
      </grid>

      <card :header="{title:'我的钱包'}">
        <div slot="content"
             class="card-demo-flex card-demo-content01">
          <div class="vux-1px-r">
            <span>1130</span>
            <br/> 京豆
          </div>
          <div class="vux-1px-r">
            <span>15</span>
            <br/> 京东券
          </div>
          <div class="vux-1px-r">
            <span>0</span>
            <br/> 京东卡/E卡
          </div>
          <div>
            <span>88</span>
            <br/> 七天待还
          </div>
        </div>
      </card>
    </div>

    <v-foot></v-foot>

    <transition name="router-slid"
                mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { XHeader, GroupTitle, Grid, GridItem, Card } from 'vux'
import VFoot from 'components/VFoot'

export default {
  name: 'application',
  components: {
    XHeader,
    GroupTitle,
    Grid,
    GridItem,
    Card,
    VFoot
  }
}
</script>

<style scoped>
.container {
  padding: 45px 0 60px 0;
}
.router-slid-enter-active,
.router-slid-leave-active {
  transition: all 0.4s;
}
.router-slid-enter,
.router-slid-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
</style>
