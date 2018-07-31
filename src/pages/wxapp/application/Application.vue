<template>
  <div>
    <x-header :left-options="{showBack: false}">应用</x-header>

    <div class="container">
      <group-title>2 columns</group-title>
      <grid :cols="4">
        <grid-item label="应用" v-for="i in 6" :key="i">
          <img slot="icon" width="20" src="~assets/wxapp/default-head-img.jpeg">
        </grid-item>
      </grid>

      <group-title>4 columns</group-title>
      <grid :cols="4">
        <grid-item label="应用" v-for="i in 6" :key="i">
          <img slot="icon" width="20" src="~assets/wxapp/default-head-img.jpeg">
        </grid-item>
      </grid>
    </div>

    <v-foot></v-foot>
  </div>
</template>

<script>
  import {XHeader, GroupTitle, Grid, GridItem} from 'vux'
  import VFoot from 'components/VFoot'

  export default {
    name: 'application',
    components: {
      XHeader,
      GroupTitle,
      Grid,
      GridItem,
      VFoot
    }
  }
</script>

<style scoped>
  .container {
    padding: 45px 0 60px 0;
  }
</style>
