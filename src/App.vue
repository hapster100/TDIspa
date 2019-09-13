<template>
  <div class="main">
    <CategoryBar />
    <TabsView />
  </div>
</template>

<script>
import CategoryBar from '@/components/categories/Bar'
import TabsView from '@/components/TabsView'
import { mapActions } from 'vuex'

export default {
  components: {
    CategoryBar,
    TabsView
  },
  methods: {
    ...mapActions([
      'countWorkers'
    ])
  },
  mounted() {
    this.countWorkers()
  }
}
</script>

<style scoped>
  .main {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
  }
</style>
