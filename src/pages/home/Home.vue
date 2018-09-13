<template>
  <div>
    <div class="container">
      <h2>自定义组件</h2>
      <br>

      <p>星级评分</p>
      <br>
      <rate v-model="rate"></rate>
      <br>

      <p>评价</p>
      <br>
      <evaluate v-model="evaluate"></evaluate>
      <br>

      <p>计数器</p>
      <br>
      <input-number v-model="inputNumber"
                    :min="0"
                    :max="9"
                    :step="2"></input-number>
      <input-number v-model="inputNumber1"></input-number>
      <br>

    </div>

    <v-foot></v-foot>
  </div>
</template>

<script>
import VFoot from 'components/VFoot'
import Rate from 'components/rate/Rate'
import Evaluate from 'components/evaluate/Evaluate'
import InputNumber from 'components/inputNumber/InputNumber'

export default {
  name: 'home',
  components: {
    VFoot,
    Rate,
    Evaluate,
    InputNumber
  },
  data () {
    return {
      rate: 0,
      evaluate: 2,
      inputNumber: 1,
      inputNumber1: 1
    }
  }
}
</script>

<style scoped>
.container {
  padding: 0 0 60px 0;
  background: #ffffff;
}
</style>
