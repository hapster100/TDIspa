import categoryList from '@/consts/categoryList'
import initOrganisations from '@/consts/orgList'

export default {
  state: {
    organisations: initOrganisations,
    activeCity: undefined
  },
  mutations: {
    setActiveCity(state, {city}) {
      state.activeCity = city
    },
    addOrganisation(state, {org}) {
      state.organisations.push(org)
    },
    setWorkers(state, {orgs}) {
      orgs.forEach(orgWorkerCount => {
        state.organisations
          .find(org => org.name === orgWorkerCount.name)
          .workers = orgWorkerCount.workers
      })
    },
    deleteOrganisation(state, {name}) {
      state.organisations = state.organisations.filter(org => org.name !== name)
    },
    editOrganisation(state, {name, editedOrganisation}) {
      state.organisations = state.organisations.map( org => {
        if(org.name === name) return editedOrganisation
        return org
      })
    }
  },
  actions: {
    changeActiveCity: ({commit, getters}, city) => {
      if(getters.activeCity === city) {
        commit('setActiveCity', false)
      } else {
        commit('setActiveCity', {city})
      }
    },
    openAddOrganisation: ({dispatch}) => {
      dispatch('openTab', {
        title: 'OrganisationForm',
        tab: {
          type: 'AddOrganisationTab'
        }
      })
    },
    closeAddOrganisation: ({dispatch}) => {
      dispatch('openTab', categoryList.find(tab => tab.title === 'Organisations'))
      dispatch('closeTab', 'OrganisationForm')
    },
    addOrganisation: ({commit}, org) => {
      org.workers = 0
      commit('addOrganisation', {org})
    },
    openOrganisation: ({dispatch}, org) => {
      dispatch('openTab', {
        title: org.name.replace(/\s/g, ''),
        tab: {
          type: 'OrganisationTab',
          props: org
        }
      })
    },
    countWorkers: ({commit, getters}) => {
      const orgs = getters.organisationList.map(org => ({
        name: org.name,
        workers: 0
      }))
      getters.workerList.forEach(worker => {
        if(worker.organisation) {
          const targetOrg = orgs.find(org => org.name === worker.organisation)
          if(targetOrg) targetOrg.workers++
        }
      })
      commit('setWorkers', {orgs})
    },
    deleteOrganisation: ({commit, getters, dispatch}, name) => {
      getters.orgWorkersList(name).forEach(worker => {
        dispatch('dismissWorker', worker)
      })
      dispatch('closeTab', name.replace(/\s/g, ''))
      commit('deleteOrganisation', {name})
    },
    editOrganisation: ({commit, dispatch, getters}, {name, editedOrganisation}) => {
      commit('editOrganisation', {name, editedOrganisation})
      getters.orgWorkersList(name).forEach(worker => {
        dispatch('changeOrganisation', {worker, newOrg: editedOrganisation.name})
      })
      dispatch('closeTab', name.replace(/\s/g, ''))
      dispatch('openOrganisation', editedOrganisation)
    }
  },
  getters: {
    organisationList: (state) => {
      return state.organisations
    },
    filtredOrganisationList: (state) => {
      if(state.activeCity) {
        return state.organisations.filter(org => state.activeCity === org.city)
      } else {
        return state.organisations
      }
    },
    cities: (state) => {
      const citySet = new Set()
      for (const org of state.organisations) {
        citySet.add(org.city)
      }
      return [...citySet]
    },
    activeCity: (state) => {
      return state.activeCity
    }
  }
}