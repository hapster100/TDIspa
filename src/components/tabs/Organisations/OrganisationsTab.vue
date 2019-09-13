<template>
  <div class="organisations-tab">

    <div class="cities-list">
      <h3>Cities:</h3>
      <div v-for="city in cities"
        :key="city"
        class="city"
        :class="{active: city === activeCity}"
        @click="changeActiveCity(city)"
      >
        <div>
          {{city}}
        </div>
      </div>
    </div>

    <div class="organisations">
      <div class="organisations-table">
        <Table 
          :tableData="organisations"
          @return="targetOrganisation"
        />
      </div>
      <AddButton 
        @add="openAddOrganisation"
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
      cities: 'cities',
      organisations: 'filtredOrganisationList',
      activeCity: 'activeCity'
    })
  },
  methods: {
    ...mapActions([
      'changeActiveCity',
      'openAddOrganisation',
      'openOrganisation'
    ]),
    targetOrganisation(org) {
      this.openOrganisation(org)
    }
  },
  components: {
    Table,
    AddButton
  }
}
</script>

<style scoped>
  .organisations-tab {
    height: 100%;
    background-color: #ccf;
    color: black;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  .cities-list {
    width: 240px;
    min-width: 240px;
    background-color: blue;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .city {
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

  .organisations {
    flex-grow: 1;
    padding: 10px;
    position: relative;
    display: flex;
    justify-content: center;
  }
  
  .organisations-table {
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