<template>
  <div class="toast" :class="{hidden:!visiable}">
    <i>{{message}}</i>
  </div>
</template>

<script>
  export default {
    name: 'toast',
    data () {
      return {
        message: '',
        visiable: true
      }
    }
  }
</script>

<style scoped>
  .hidden {
    transform: scale(0) !important;
    transition: 0.3s;
  }
  .toast{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 99;
    padding: 15px;
    background: rgba(0,0,0,.1);
    border-radius: 10px;
  }
</style>