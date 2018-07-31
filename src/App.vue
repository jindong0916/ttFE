<template>
  <div id="app">
    <!--<transition name="router-fade" mode="out-in">-->
      <!--<router-view v-if="!$route.meta.transform"></router-view>-->
    <!--</transition>-->
    <!--<transition name="router-fade" mode="out-in">-->
      <!--<router-view v-if="$route.meta.transform"></router-view>-->
    <!--</transition>-->
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="less">
  @import "~vux/src/styles/reset.less";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  html, body {
    background: #F7F7FA;
  }

  .vux-header {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
  }

  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
