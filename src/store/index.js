import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  user: null
}

const mutations = {
  setUser (state, params) {
    state.user = params
  },
  setUserProperty (state, params) {
    for (let i in params) {
      if (state.user.hasOwnProperty(i)) {
        if (typeof i === 'object') {
          state.user[i].unshift(params[i])
        } else {
          state.user[i] = params[i]
        }
      }
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  plugins: [createPersistedState()]
})
