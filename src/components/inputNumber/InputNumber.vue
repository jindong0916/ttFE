<template>
  <div class='number'>
    <span class="reduce"
          @click="reduce">-</span>
    <input type="number"
           :value="value"
           class="result">
    <span class="plus"
          @click="plus">+</span>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    }
  },
  data () {
    return {
      newVal: 0
    }
  },
  created () {
    this.newVal = this.value
  },
  computed: {
  },
  methods: {
    reduce () {
      if (this.min === -Infinity) {
        this.newVal = this.newVal - this.step
      } else {
        if (this.min >= this.newVal) {
          return false
        }

        if (this.min <= this.newVal - this.step) {
          this.newVal = this.newVal - this.step
        } else {
          this.newVal = this.min
        }
      }
      this.$emit('input', this.newVal)
    },
    plus () {
      if (this.max === Infinity) {
        this.newVal = this.newVal + this.step
      } else {
        if (this.max <= this.newVal) {
          return false
        }

        if (this.max >= this.newVal + this.step) {
          this.newVal = this.newVal + this.step
        } else {
          this.newVal = this.max
        }
      }
      this.$emit('input', this.newVal)
    }
  }
}
</script>

<style lang='less' scoped>
* {
  touch-action: none;
}
.number {
  width: 180px;
  line-height: 38px;
  display: inline-block;
  position: relative;
  .reduce {
    top: 1px;
    left: 1px;
    border-radius: 4px 0 0 4px;
    border-right: 1px solid #dcdfe6;
    position: absolute;
    z-index: 1;
    width: 40px;
    height: auto;
    text-align: center;
    background: #f5f7fa;
    color: #606266;
    cursor: pointer;
  }
  .plus {
    top: 1px;
    right: 1px;
    border-radius: 0 4px 4px 0;
    border-left: 1px solid #dcdfe6;
    position: absolute;
    z-index: 1;
    width: 40px;
    height: auto;
    text-align: center;
    background: #f5f7fa;
    color: #606266;
    cursor: pointer;
  }
  .result {
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    -webkit-appearance: none;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
  }
}
</style>