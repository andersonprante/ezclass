import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
import * as actions from './actions'
import * as getters from './getters'

import app from './modules/app'
import menu from './modules/menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,  // process.env.NODE_ENV !== 'production',
  actions,
  getters,
  modules: {
    app,
    menu
  },
  state: {
    pkg,
    ez: {
      user: null
      // fb: {},
      // count: 0
    }
  },
  mutations: {
    setUser (state, u) {
      state.ez.user = u
    }
    // addCount (state) {
    //   state.ez.count++
    // }
    // fb (state, payload) {
    //   state.ez.fb[payload.table] = payload.data
    // }
  }
})

export default store
