<template>
  <div class="tabs-view">
    <template v-if="tabs.length">
      <TabSelector 
        :options="tabs"
        :active="active" 
      /> 
      <Tab 
        :active="active"
      />
    </template>
    <div v-else>
      <h1>
        No Open Tabs
      </h1>
    </div>
  </div>
</template>

<script>
import Tab from '@/components/Tab'
import TabSelector from '@/components/TabSelector'

export default {
  computed: {
    active() {
      return this.$store.getters.active
    },
    tabs() {
      return this.$store.getters.tabs
    }
  },
  components: {
    Tab,
    TabSelector
  }
}
</script>

<style scoped>
  .tabs-view {
    margin: 0;
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: calc(100% - 100px);
  }
</style>