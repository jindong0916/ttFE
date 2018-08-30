<template>
  <div class="rating-page">
    <x-header>修改密码</x-header>

    <div class="container">
      <ul class="j-input">
        <li>
          <label for="pwd" class="required">原密码</label>
          <input id="pwd" v-model="password" placeholder="输入原密码"/>
          <span>原密码错误</span>
        </li>
        <li>
          <label for="pwd1" class="required">新密码</label>
          <input id="pwd1" v-model="password1" placeholder="输入新密码"/>
        </li>
        <li>
          <label for="pwd2" class="required">确认密码</label>
          <input id="pwd2" v-model="password2" placeholder="再次输入密码"/>
        </li>
      </ul>

      <div class="j-flex">
        <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="edit">修改</x-button>
        <!--<x-button @click.native="back">取消</x-button>-->
        <x-button @click.native="alertShow = !alertShow">取消</x-button>
      </div>
    </div>

    <transition mode="out-in" name="alert">
      <div class="j-alert" v-show="alertShow">
        <span class="alert-title">提示</span>
        <span class="alert-tips">修改成功</span>
        <div class="alert-btn">
          <button v-show="alertOptions.showCancel" @click="alertShow = false">取消</button>
          <button @click="alertShow = !alertShow">确定</button>
        </div>
      </div>
    </transition>
    <transition mode="out-in" name="toast">
      <div class="j-toast" v-show="toastShow">
        <span>{{toastMsg}}</span>
      </div>
    </transition>
  </div>
</template>

<script>
  import {XHeader, XButton} from 'vux'

  export default {
    name: 'EditPassword',
    components: {
      XHeader,
      XButton
    },
    data () {
      return {
        password: '',
        password1: '',
        password2: '',
        toastShow: false,
        toastMsg: '',
        alertShow: true,
        alertOptions: {
          showCancel: true
        }
      }
    },
    computed: {
      originPwd () {
        return this.$store.state.user.pwd
      }
    },
    watch: {
      toastShow () {
        if (this.toastShow) {
          setTimeout(() => {
            this.toastShow = false
          }, 2000)
        }
      }
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      edit () {
        // if(this.password!==""&&this.password!==this.originPwd){
        //
        // }
        this.toastShow = true
        this.toastMsg = '修改成功'
        this.$store.commit('setUserProperty', {pwd: this.password1})
      },
      validPwd () {
        if (!this.password) {
          this.$vux.alert.show({
            title: 'VUX is Cool',
            content: this.$t('Do you agree?'),
            onShow () {
              console.log('Plugin: I\'m showing')
            },
            onHide () {
              console.log('Plugin: I\'m hiding now')
            }
          })
        }
      },
      validPwd1 () {

      },
      validPwd2 () {

      }
    }
  }
</script>

<style scoped lang="less">
  .rating-page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;
    z-index: 501;
  }

  .j-flex {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    margin-top: 20px;

    & > button {
      flex: 1;
      margin: 0 0 0 8px;
      &:first-child {
        margin-left: 0;
      }
    }
  }

  .j-input {
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #D9D9D9;
    border-top: 1px solid #D9D9D9;
    background-color: #fff;
    margin-top: 20px;

    & > li {
      margin-left: 15px;
      height: 50px;
      line-height: 50px;
      position: relative;

      /*&:last-child {*/
        /*border-bottom: none;*/
      /*}*/
      &:before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        border-top: 1px solid #D9D9D9;
        color: #D9D9D9;
        transform-origin: 0 0;
        transform: scaleY(0.5);
      }
      &:first-child:before{
        content: none;
      }

      & > label {
        width: 80px;
        display: inline-block;
        text-align: right;

        &.required:before{
          content: "*";
          color: red;
          margin-right: 3px;
        }
      }

      & > input {
        margin-left: 5px;
        height: 20px;
        line-height: 20px;
        border-radius: 5px;
        padding: 0 5px;
        border: 1px solid #ccc;

        &:focus{
          outline: none;
        }
      }

      & > span{
        position: absolute;
        bottom: 1px;
        line-height: 1;
        left: 90px;
        color: red;
        font-size: 10px;
      }
    }
  }
  .j-toast{
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%);
    background-color: rgba(0,0,0,0.1);
    padding: 10px 20px;
    border-radius: 10px;
  }

  .toast-enter-active, .toast-leave-active{
    transition: opacity .5s;
  }
  .toast-enter, .toast-leave{
    opacity: 0;
  }

  .j-alert{
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50px 0 0 -75px;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    width: 150px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .alert-tips{
      margin: 10px 0;
      width: 100%;
      font-size: 12px;
    }

    .alert-btn{
      padding-top:5px;
      border-top: 1px solid #cccccc;
      width: 100%;
    }
  }
  .alert-enter-active {
    animation: bounce-in .5s;
  }
  .alert-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
