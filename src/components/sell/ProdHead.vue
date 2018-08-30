<template>
  <div class="header">
    <div class="info">
      <img class="pic"
           src="~assets/seller_avatar_256px.jpg">
      <div class="detail">
        <div class="name">
          <span class="name-mark">品牌</span>
          粥品香坊（回龙观）
        </div>
        <div class="desc">蜂鸟专送/38分钟送达</div>
        <div class="event">在线支付满28减5</div>
      </div>
    </div>
    <div class="tips">
      粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {

    }
  }
}
</script>
<style lang='less' scoped>
.header {
  display: flex;
  flex-direction: column;
  background: rgba(0,0,0, 0.55);
  color: #ffffff;
  padding: 5px 15px;
  .info {
    display: flex;
    flex-direction: row;
    padding: 15px 0;
    align-items: center;
    .pic {
      width: 64px;
      height: 64px;
    }
    .detail {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 15px;
      .name {
        font-size: 16px;
        .name-mark {
          background: red;
          padding: 0 3px;
        }
      }
      .desc {
        font-size: 12px;
      }
      .event {
        font-size: 10px;
      }
    }
  }
  .tips {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 10px;
    &::before {
      content: '\516C\544A'; // 公告
      background: #ffffff;
      color: #333;
      padding: 0 3px;
    }
  }
}
</style>
