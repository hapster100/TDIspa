import Vue from 'vue'
import Vuex from 'vuex'
import workers from '@/store/workers'
import organisations from '@/store/organisations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openTabs: [],
    active: undefined
  },
  mutations: {
    setActive(state, {active}) {
      state.active = active
    },
    openTab(state, {tab}) {
      state.openTabs.push(tab)
    },
    closeTab(state, {title}) {
      state.openTabs = state.openTabs.filter(tab => tab.title != title)
    }
  },
  actions: {
    changeActive({ commit }, active) {
      commit('setActive', {active})
    },
    openTab({commit, state, dispatch}, tab) {
      const tabTitles = state.openTabs.map(tab => tab.title)
      if(!tabTitles.includes(tab.title)) {
        commit('openTab', {tab})
      }
      dispatch('changeActive', tab.title)
    },
    closeTab({commit, state, dispatch}, title) {
      commit('closeTab', {title})
      if(state.active === title && state.openTabs[0]) {
        const newActive = state.openTabs[0].title
        dispatch('changeActive', newActive)
      }
    }
  },
  getters: {
    activeTab: (state) => {
      const tabObj = state.openTabs.find((tab) => tab.title === state.active)
      if(tabObj) {
        return tabObj.tab
      } else {
        return undefined
      }
    },
    tabs: (state) => {
      return state.openTabs
    },
    active: (state) => {
      return state.active
    },
    tab: (state) => {
      return (title) => {
        return state.openTabs.find(tab => tab.title === title)
      }
    }
  },
  modules: {
    workers,
    organisations
  }
})