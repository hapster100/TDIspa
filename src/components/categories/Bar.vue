<template>
  <div id="bar">
    <CtgButton v-for="ctg in categories"
      :key="ctg.title"
      :ctg="ctg"
    />
  </div>
</template>

<script>
import CtgButton from '@/components/categories/Button'
import categoryList from '@/consts/categoryList'

export default {
  data: () => ({
    categories: categoryList
  }),
  components: {
    CtgButton
  }
}
</script>

<style scoped>
  #bar {
    min-height: 80px;
    max-height: 80px;
    margin: 0;
    background-color: blue;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>