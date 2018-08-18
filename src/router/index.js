import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('pages/wxapp/home/Home'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/mySetting',
      name: 'mySetting',
      component: () => import('pages/wxapp/mine/MySetting'),
      meta: {
        title: '我的'
      },
      children: [
        {
          path: 'ownSpace',
          name: 'ownSpace',
          component: () => import('pages/wxapp/mine/children/OwnSpace'),
          meta: {
            title: '个人中心'
          }
        },
        {
          path: 'myIndex',
          name: 'myIndex',
          component: () => import('pages/wxapp/mine/children/Index'),
          meta: {
            title: '我的默认页面'
          }
        }
      ]
    },
    {
      path: '/application',
      name: 'application',
      component: () => import('pages/wxapp/application/Application'),
      meta: {
        title: '应用'
      }
    },
    {
      path: '/discovery',
      name: 'discovery',
      component: () => import('pages/wxapp/discovery/Discovery'),
      meta: {
        title: '发现'
      },
      children: [
        {
          path: 'disIndex',
          name: 'disIndex',
          component: () => import('pages/wxapp/discovery/children/Index'),
          meta: {
            title: '发现默认页'
          }
        }
      ]
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: () => import('pages/wxapp/wallet/wallet'),
      meta: {
        title: '钱包'
      }
    },
    {
      path: '/editPassword',
      name: 'editPassword',
      component: () => import('pages/wxapp/forget/EditPassword'),
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
