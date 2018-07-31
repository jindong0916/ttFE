<template>
  <div class="rating-page">
    <x-header>发现页</x-header>

    <div class="container">
      <form-preview header-label="付款金额"
                    header-value="¥2400.00"
                    :body-items="list"
                    :footer-buttons="buttons1"></form-preview>
    </div>
  </div>

</template>

<script>
  import {XHeader, FormPreview} from 'vux'

  export default {
    name: 'index',
    components: {
      XHeader,
      FormPreview
    },
    data () {
      return {
        list: [{
          label: '商品',
          value: '电动打蛋机'
        }, {
          label: '标题标题',
          value: '名字名字名字'
        }, {
          label: '标题标题',
          value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
        }],
        buttons1: [{
          style: 'default',
          text: '辅助操作',
          onButtonClick: () => {
            console.log(this.$route.path)
          }
        }, {
          style: 'primary',
          text: '返回',
          link: '/discovery'
        }]
      }
    }
  }
</script>

<style scoped>
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
</style>
