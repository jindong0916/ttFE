<template>
  <div>
    <div class="container">
      <prod-head></prod-head>
      neisss

    </div>
    
    <v-foot></v-foot>
  </div>
</template>
<script>
import ProdHead from 'components/sell/ProdHead'
import VFoot from 'components/VFoot'
export default {
  name: '',
  data () {
    return {

    }
  },
  components: {
    VFoot,
    ProdHead
  }
}
</script>
<style scoped lang="less">
.container {
  padding: 0 0 60px 0;
}
</style>
