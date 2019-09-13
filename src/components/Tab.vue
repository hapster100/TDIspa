<template>
  <div class="tab">
    <component 
      :is="activeTab.type"
      :props="activeTab.props">
    </component>
  </div>
</template>

<script>
import WorkersTab from '@/components/tabs/Workers/WorkersTab'
import AddWorkerTab from '@/components/tabs/Workers/AddWorkerTab'
import WorkerTab from '@/components/tabs/Workers/WorkerTab'

import OrganisationsTab from '@/components/tabs/Organisations/OrganisationsTab'
import AddOrganisationTab from '@/components/tabs/Organisations/AddOrganisationTab'
import OrganisationTab from '@/components/tabs/Organisations/OrganisationTab'

import { mapGetters } from 'vuex'

export default {
  props: ['active'],
  computed: {
    ...mapGetters([
      'activeTab'
    ]),
  },
  components: {

    WorkersTab,
    AddWorkerTab,
    WorkerTab,

    OrganisationsTab,
    AddOrganisationTab,
    OrganisationTab
    
  }
}
</script>

<style scoped>
  h1 {
    margin: 0;
  }

  @keyframes slide {
    from {
      height: 0px;
    }
    to {
      height: calc(100% - 50px);
    }
  }

  .tab {
    height: calc(100% - 50px);
    animation: slide 1s ease-out;
    background-color: blue;
    color: white;
    padding: 10px 0;
    padding-right: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
</style>

