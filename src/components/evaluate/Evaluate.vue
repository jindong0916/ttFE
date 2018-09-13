<template>
  <div id='app'>
    <div class="pingjia">
      <div class="pj"
           v-for="( val, key, i ) in evas"
           :key="key"
           @click="evaluate(i)"
           :class="value === i ? 'active '+ key : key">
        {{val}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number
  },
  data () {
    return {
      evas: { 'cp': '差评', 'zp': '中评', 'hp': '好评' }
    }
  },
  methods: {
    evaluate (i) {
      this.$emit('input', i)
    }
  }
}
</script>

<style lang='less' scoped>
.pingjia {
  flex: 1;
  font-size: 16px;
  color: #d7d7d7;
  letter-spacing: 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  .pj {
    position: relative;
    margin-left: 36px;
    &:not(:first-child) {
      margin-right: 10px;
    }
    &::before {
      content: '';
      width: 26px;
      height: 26px;
      background-size: 26px 26px;
      position: absolute;
      left: -34px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .hp {
    &::before {
      background-image: url(../../assets/evaluate/haoping.png);
    }
    &.active {
      color: #ef6e6e;
      &::before {
        background-image: url(../../assets/evaluate/haoping-active.png);
      }
    }
  }
  .zp {
    &::before {
      background-image: url(../../assets/evaluate/zhongping.png);
    }
    &.active {
      color: #f69047;
      &::before {
        background-image: url(../../assets/evaluate/zhongping-active.png);
      }
    }
  }
  .cp {
    &::before {
      background-image: url(../../assets/evaluate/chaping.png);
    }
    &.active {
      color: #808391;
      &::before {
        background-image: url(../../assets/evaluate/chaping-active.png);
      }
    }
  }
}
</style>