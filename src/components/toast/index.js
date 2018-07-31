import Toast from './toast'

let plugin = {}

// 插件必须有一个install方法
plugin.install = function (Vue, options = {}) {
  const ToastController = Vue.extend(Toast)

  let removeDom = e => {
    if (e.target.parentNode.childNodes.length > 1) {
      e.target.parentNode.removeChild(e.target)
    } else {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode)
    }
  }

  // toast关闭
  ToastController.prototype.close = function () {
    this.visiable = false
    this.$el.addEventListener('transitionend', removeDom)
  }

  Vue.prototype.$toast = (option = {}) => {
    let instance = new ToastController().$mount(document.createElement('div'))
    let duration = option.duration || options.duration || 2000
    instance.message = typeof option === 'string' ? option : option.message
    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
      setTimeout(function () {
        instance.close()
      }, duration)
    })
  }
}

export default plugin
