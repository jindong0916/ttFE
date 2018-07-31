<template>
  <div>
    <x-header :left-options="{showBack: false}">首页</x-header>

    <div class="container">
      <card :header="{title:'我的钱包'}" v-for="i in 9" :key="i">
        <div slot="content" class="card-demo-flex card-demo-content01">
          <div class="vux-1px-r">
            <span>1130</span>
            <br/>
            京豆
          </div>
          <div class="vux-1px-r">
            <span>15</span>
            <br/>
            京东券
          </div>
          <div class="vux-1px-r">
            <span>0</span>
            <br/>
            京东卡/E卡
          </div>
          <div>
            <span>88</span>
            <br/>
            七天待还
          </div>
        </div>
      </card>
    </div>

    <v-foot></v-foot>
  </div>
</template>

<script>
  import {XHeader, Card} from 'vux'
  import VFoot from 'components/VFoot'

  export default {
    name: 'home',
    components: {
      XHeader,
      Card,
      VFoot
    }
  }
</script>

<style scoped>
  .container {
    padding: 45px 0 60px 0;
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
