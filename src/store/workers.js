import categoryList from '@/consts/categoryList'
import initWorkers from '@/consts/workerList'

export default {
  state: {
    workers: initWorkers,
    activeProfesion: undefined
  },
  mutations: {
    setActiveProf(state, {prof}) {
      state.activeProfesion = prof
    },
    addWorker(state, {worker}) {
      state.workers.push(worker)
    },
    deleteWorker(state, {name}) {
      state.workers = state.workers.filter(worker => worker.name !== name)
    },
    editWorker(state, {name, editedWorker}) {
      state.workers = state.workers.map(worker => {
        if(worker.name === name) return editedWorker
        return worker
      })
    }
  },
  actions: {
    changeActiveProf: ({commit, getters}, prof) => {
      if(getters.activeProf === prof) {
        commit('setActiveProf', false)
      } else {
        commit('setActiveProf', {prof})
      }
    },
    openAddWorker: ({dispatch}) => {
      dispatch('openTab', {
        title: 'WorkerForm',
        tab: {
          type: 'AddWorkerTab'
        }
      })
    },
    closeAddWorker: ({dispatch}) => {
      dispatch('openTab', categoryList.find(tab => tab.title === 'Workers'))
      dispatch('closeTab', 'WorkerForm')
    },
    addWorker: ({commit}, worker) => {
      commit('addWorker', {worker})
    },
    deleteWorker: ({commit, dispatch}, name) => {
      dispatch('closeTab', name.replace(/\s/g, ''))
      commit('deleteWorker', {name})
      dispatch('countWorkers')
    },
    openWorker: ({dispatch}, worker) => {
      dispatch('openTab', {
        title: worker.name.replace(/\s/g, ''),
        tab: {
          type: 'WorkerTab',
          props: worker
        }
      })
    },
    editWorker: ({commit, dispatch}, {name, editedWorker}) => {
      commit('editWorker', {name, editedWorker})
      dispatch('countWorkers')
      dispatch('closeTab', name.replace(/\s/g, ''))
      dispatch('openWorker', editedWorker)
    },
    dismissWorker: ({dispatch}, worker) => {
      dispatch('changeOrganisation', {worker, newOrg: ''})
    },
    changeOrganisation({commit, dispatch}, {worker, newOrg}) {
      commit('editWorker', {
        name: worker.name,
        editedWorker: {
          ...worker,
          organisation: newOrg
        }
      })
      dispatch('countWorkers')
    }
  },
  getters: {
    workerList: (state) => {
      return state.workers
    },
    filtredWorkerList: (state) => {
      if(state.activeProfesion) {
        return state.workers.filter(worker => state.activeProfesion === worker.profesion)
      } else {
        return state.workers
      }
    },
    profesions: (state) => {
      const profSet = new Set()
      for (const worker of state.workers) {
        profSet.add(worker.profesion)
      }
      return [...profSet]
    },
    activeProf: (state) => {
      return state.activeProfesion
    },
    orgWorkersList: (state) => {
      return (orgName) => {
        return state.workers
          .filter(worker => worker.organisation === orgName)
      }
    }
  }
}