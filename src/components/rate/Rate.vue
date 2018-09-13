<template>
  <div id='eva'>
    <div class="eva-rate">
      <div class="rate"
           v-for="(val,key) in stars"
           :key="key"
           @click="rate(key,val)"
           :class="value >= key ? 'rate' + key : ''">
      </div>
    </div>
    <span class="eva-tips">{{tips}}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: Number
  },
  data () {
    return {
      stars: { '1': '非常差', '2': '差', '3': '一般', '4': '好', '5': '非常好' },
      tips: ''
    }
  },
  methods: {
    rate (key, val) {
      this.tips = val
      this.$emit('input', +key)
    }
  }
}
</script>

<style lang='less' scoped>
#eva {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .eva-rate {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .rate {
      margin-right: 10px;
      background-image: url(../../assets/evaluate/star.png);
      background-size: 18px 18px;
      width: 18px;
      height: 18px;
    }
    .rate1 {
      background-image: url(../../assets/evaluate/star-1.png);
    }
    .rate2 {
      background-image: url(../../assets/evaluate/star-2.png);
    }
    .rate3 {
      background-image: url(../../assets/evaluate/star-3.png);
    }
    .rate4 {
      background-image: url(../../assets/evaluate/star-4.png);
    }
    .rate5 {
      background-image: url(../../assets/evaluate/star-5.png);
    }
  }
  .eva-tips {
    font-size: 12px;
    color: #cccccc;
    letter-spacing: 0;
  }
}
</style>