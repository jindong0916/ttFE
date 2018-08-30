<template>
  <div>
    <x-header :left-options="{showBack: false}">我的</x-header>

    <div class="container">
      <group>
        <cell :title="user.name" link="/mySetting/ownSpace" :inline-desc="'账号：'+user.account">
          <img slot="icon" width="60" style="display:block;margin-right:5px;"
               :src="user.photo">
        </cell>
      </group>

      <group>
        <cell title="钱包" link="/wallet">
          <img slot="icon" width="30" style="display:block;margin-right:5px;" src="~assets/default-head-img.jpeg">
        </cell>
      </group>

      <group>
        <div class="news-wrap">
          <cell title="收藏" link="/mySetting/myIndex">
            <img slot="icon" width="30" style="display:block;margin-right:5px;" src="~assets/default-head-img.jpeg">
          </cell>
          <cell title="相册" link="/mySetting/myIndex">
            <img slot="icon" width="30" style="display:block;margin-right:5px;" src="~assets/default-head-img.jpeg">
          </cell>
          <cell title="卡包" link="/mySetting/myIndex">
            <img slot="icon" width="30" style="display:block;margin-right:5px;" src="~assets/default-head-img.jpeg">
          </cell>
          <cell title="表情" link="/mySetting/myIndex">
            <img slot="icon" width="30" style="display:block;margin-right:5px;" src="~assets/default-head-img.jpeg">
          </cell>
        </div>
      </group>

      <group>
        <cell title="设置" link="/mySetting/myIndex">
          <img slot="icon" width="30" style="display:block;margin-right:5px;" src="~assets/default-head-img.jpeg">
        </cell>
      </group>


      <button @click="test">aaa</button>
    </div>

    <v-foot></v-foot>

    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>

</template>

<script>
  import {Group, Cell, XHeader} from 'vux'
  import VFoot from 'components/VFoot'
  import api from 'api/api'

  export default {
    name: 'mySetting',
    components: {
      Group,
      Cell,
      XHeader,
      VFoot
    },
    data () {
      return {

      }
    },
    created () {
      this.getUser()
    },
    computed: {
      user () {
        return this.$store.state.user
      }
    },
    methods: {
      getUser () {
        api.getUser('/getUser', {

        }).then(res => {
          this.$store.commit('setUser', res)
        })
      },
      test () {
        this.$toast('哈哈哈')
      }
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
