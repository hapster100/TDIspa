<template>
  <div class="workers-tab">

    <div class="profesion-list">
      <h3>Profesions:</h3>
      <div v-for="prof in profesions"
        :key="prof"
        class="profesion"
        :class="{active: prof === activeProf}"
        @click="changeActiveProf(prof)"
      >
        <div>
          {{prof + 's'}}
        </div>
      </div>
    </div>

    <div class="workers">
      <div class="workers-table">
        <Table 
          :tableData="workers"
          @return="targetWorker"
        />
      </div>
      <AddButton 
        @add="openAddWorker"
      />
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Table from '@/components/Table'
import AddButton from '@/components/AddButton'

export default {
  computed: {
    ...mapGetters({
      profesions: 'profesions',
      activeProf: 'activeProf',
      workers: 'filtredWorkerList'
    }),
  },
  methods: {
    ...mapActions([
      'changeActiveProf',
      'openAddWorker',
      'openWorker'
    ]),
    targetWorker(worker) {
      this.openWorker(worker)
    }
  },
  components: {
    Table,
    AddButton
  }
}
</script>

<style scoped>
  .workers-tab {
    height: 100%;
    background-color: #ccf;
    color: black;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  .profesion-list {
    width: 240px;
    min-width: 240px;
    background-color: blue;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profesion {
    margin: 10px;
    height: 40px;
    background-color: #ccf;
    color: black;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .active {
    background-color: #aaf;
  }

  .workers {
    flex-grow: 1;
    padding: 10px;
    position: relative;
    display: flex;
    justify-content: center;
  }
  
  .workers-table {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow-y: scroll;
  }

  h3 {
    margin: 0;
  }
</style>