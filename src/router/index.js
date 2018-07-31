import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = r => require.ensure([], () => r(require('pages/wxapp/home/Home')), 'home')

const MySetting = r => require.ensure([], () => r(require('pages/wxapp/mine/MySetting')), 'mySetting')
const OwnSpace = r => require.ensure([], () => r(require('pages/wxapp/mine/children/OwnSpace')), 'ownSpace')
const MyIndex = r => require.ensure([], () => r(require('pages/wxapp/mine/children/Index')), 'myIndex')

const Discovery = r => require.ensure([], () => r(require('pages/wxapp/discovery/Discovery')), 'discovery')
const DisIndex = r => require.ensure([], () => r(require('pages/wxapp/discovery/children/Index')), 'disIndex')

const Application = r => require.ensure([], () => r(require('pages/wxapp/application/Application')), 'application')

const Wallet = r => require.ensure([], () => r(require('pages/wxapp/wallet/wallet')), 'wallet')

const EditPassword = r => require.ensure([], () => r(require('pages/wxapp/forget/EditPassword')), 'editPassword')

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/mySetting',
      name: 'mySetting',
      component: MySetting,
      meta: {
        title: '我的'
      },
      children: [
        {
          path: 'ownSpace',
          name: 'ownSpace',
          component: OwnSpace,
          meta: {
            title: '个人中心'
          }
        },
        {
          path: 'myIndex',
          name: 'myIndex',
          component: MyIndex,
          meta: {
            title: '我的默认页面'
          }
        }
      ]
    },
    {
      path: '/application',
      name: 'application',
      component: Application,
      meta: {
        title: '应用'
      }
    },
    {
      path: '/discovery',
      name: 'discovery',
      component: Discovery,
      meta: {
        title: '发现'
      },
      children: [
        {
          path: 'disIndex',
          name: 'disIndex',
          component: DisIndex,
          meta: {
            title: '发现默认页'
          }
        }
      ]
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: Wallet,
      meta: {
        title: '钱包'
      }
    },
    {
      path: '/editPassword',
      name: 'editPassword',
      component: EditPassword,
      meta: {
        title: '忘记密码'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
