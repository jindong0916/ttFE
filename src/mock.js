const Mock = require('mockjs')
const Random = Mock.Random

Mock.mock('/getUser', 'post', () => {
  return Mock.mock({
    id: '@guid',
    account: /^[a-zA-Z]{1}[0-9a-zA-Z]{5,11}$/,
    pwd: '123',
    name: Random.cname(),
    photo: Random.dataImage('250x250'),
    WX: /^[a-zA-Z]{1}[0-9a-zA-Z]{5,11}$/,
    address: Random.county(true),
    telephone: /^1[3578]\d{9}$/
  })
})
Mock.mock('/getWallet', 'post', () => {
  return Mock.mock({
    money: [
      {
        name: 'Point',
        cname: '京豆',
        num: /^\d{4}$/
      },
      {
        name: 'Coupon',
        cname: '京东券',
        num: /^\d{3}$/
      },
      {
        name: 'GiftCard',
        cname: '京东卡/E卡',
        num: /^\d{3}$/
      },
      {
        name: 'Cash',
        cname: '七天待还',
        num: /^\d{3}$/
      }
    ],
    'txApp|9': [
      {
        id: '@guid',
        icon: "@dataImage('250x250')",
        name: '@cname',
        link: ''
      }
    ],
    'thirdApp|9': [
      {
        id: '@guid',
        icon: "@dataImage('250x250')",
        name: '@cname',
        link: ''
      }
    ]
  })
})
