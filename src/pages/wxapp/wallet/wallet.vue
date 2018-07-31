<template>
  <div class="rating-page">
    <x-header>钱包</x-header>

    <div class="container">
      <card :header="{title:'我的钱包'}">
        <div slot="content" class="card-demo-flex card-demo-content01">
          <div class="vux-1px-r" v-for="(item,index) in wallets" :key="index">
            <span>{{parseInt(item.num)}}</span>
            <br/>
            {{item.cname}}
          </div>
        </div>
      </card>

      <group>
        <group-title>腾讯服务</group-title>
        <grid :cols="3">
          <grid-item :label="i.name" v-for="i in txApps" :key="i.id">
            <img slot="icon" width="20" :src="i.icon">
          </grid-item>
        </grid>
      </group>


      <group>
        <group-title>第三方服务</group-title>
        <grid :cols="3">
          <grid-item :label="i.name" v-for="i in thirdApps" :key="i.id">
            <img slot="icon" width="20" :src="i.icon">
          </grid-item>
        </grid>
      </group>
    </div>

  </div>
</template>

<script>
  import {XHeader, GroupTitle, Grid, GridItem, Card, Group} from 'vux'
  import api from 'api/api'

  export default {
    name: 'wallet',
    components: {
      XHeader,
      GroupTitle,
      Grid,
      GridItem,
      Card,
      Group
    },
    data () {
      return {
        wallets: {},
        txApps: {},
        thirdApps: {}
      }
    },
    created () {
      this.getWallet()
    },
    methods: {
      getWallet () {
        api.getWallet('/getWallet', {

        }).then((res) => {
          console.log(res)
          this.wallets = res.money
          this.txApps = res.txApp
          this.thirdApps = res.thirdApp
        })
      }
    }
  }
</script>

<style scoped>
  .rating-page {
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
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 40px 0;
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
