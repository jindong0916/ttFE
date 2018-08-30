<template>
  <div class="rating-page">
    <x-header>我的默认页面</x-header>

    <div class="container">
      <div class="banner">
        <img src="~assets/image/banner.png"/>
      </div>

      <div class="ac-title">
        2018最红5积分
      </div>

      <div class="ac-rule" :class="{open:!isRuleOpen}">
        <ul>
          <li>活动时间:2018.01.01~2018.12.31</li>
          <li>
            <ol>
              <li>安康单请假欧舒丹扩散</li>
              <li>按时大大大是客服微风水电费</li>
              <li>辅导费是发大V佛挡杀佛我起飞前特工提供办公忐忑</li>
              <li>颠倒是非是</li>
              <li>去 实打实大所大当时多岁的</li>
              <li>安康单请假欧舒丹扩散</li>
              <li>安康单请假欧舒丹扩散</li>
              <li>安康单请假欧舒丹扩散</li>
              <li>安康单请假欧舒丹扩散</li>
            </ol>
          </li>
        </ul>
        <button class="rule-btn open" @click="isRuleOpen=true" v-show="!isRuleOpen">展开查看更多</button>
        <button class="rule-btn" @click="isRuleOpen=false" v-show="isRuleOpen">收起</button>
      </div>

      <div class="card">
        <div class="card-tips" @click="setProgress">
          获得1次兑换机会
        </div>
        <div class="card-desc" @click="progressWidth=0">
          本月消费10笔
        </div>

        <div class="progressPanel">
          <div class="progress" :style="'width:'+progressWidth+'%'"></div>
          <div class="node" :class="progressWidth>0?'complete':''">
            <div class="tips">0</div>
          </div>
          <div class="node" :class="progressWidth>=20?'complete':''" style="left: 20%">
            <div class="tips">20%</div>
          </div>
          <div class="node" :class="progressWidth>=40?'complete':''" style="left: 40%">
            <div class="tips">40%</div>
          </div>
          <div class="node" :class="progressWidth>=60?'complete':''" style="left: 60%">
            <div class="tips">60%</div>
          </div>
          <div class="node" :class="progressWidth>=80?'complete':''" style="left: 80%">
            <div class="tips">80%</div>
          </div>
          <div class="node" :class="progressWidth>=100?'complete':''" style="left: 100%">
            <div class="tips">100%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {XHeader} from 'vux'
  export default {
    name: 'index',
    components: {
      XHeader
    },
    data () {
      return {
        isRuleOpen: false,
        progressWidth: 30
      }
    },
    methods: {
      setProgress () {
        this.progressWidth += 15
        if (this.progressWidth > 100) {
          this.progressWidth = 100
        }
      }
    }
  }
</script>

<style scoped lang="less">
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
  .banner, .banner img{
    width: 100%;
    height: 120px;
  }
  .ac-title{
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    padding: 0 15px;
  }
  .ac-rule{
    background-color: #fff;
    margin: 20px 0;
    padding: 15px 15px 15px 30px;
    position: relative;
    &.open{
      height: 150px;
      overflow: hidden;
    }

    ol{
      padding-left: 15px;
    }

    .rule-btn{
      position: absolute;
      border: none;
      background-color: #fff;
      left: 50%;
      transform: translate(-50%);
      height: 50px;
      width: 100%;
      color: #3e73ff;

      &:hover{
        outline: none;
      }

      &.open{
        background-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
        //background: linear-gradient(top, rgba(255,255,255, 0), rgba(255,255, 255, 1));
        top: 72%;
      }
    }
  }

  .card{
    background-color: #fff;
    margin: 0 10px;
    border-radius: 5px;
    padding: 10px;
    position: relative;
    .card-tips{
      color: #FF9900;
    }
    .card-desc{
      color: #ffe26d;
    }
    .progressPanel{
      position: relative;
      width: 90%;
      height: 10px;
      background: #d4d4d4;
      margin: 10px 0;
      border-radius: 5px;

      .progress{
        position: relative;
        height: 10px;
        background-color: #00c4fd;
        transition: width 0.5s ease-out 0s;
      }
      .node{
        height: 14px;
        width: 14px;
        position: absolute;
        background-color: #d4d4d4;
        border-radius: 100%;
        top: -2px;
        margin-left: -5px;
        &.complete{
          background-color: #00c4fd;
        }
        .tips{
          position: absolute;
          top: -15px;
          font-size: 10px;
          left: -4px;
        }
      }
    }
  }
</style>
