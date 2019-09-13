<template>
  <div class="ctg-button"
    @click="openTab(ctg)"
  >
    <h3>{{ctg.title}}</h3>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: ['ctg'],
  methods: {
    ...mapActions([
      'openTab'
    ])
  }
}
</script>

<style scoped>
  .ctg-button {
    text-align: center;
    height: 50px;
    width: 200px;
    margin-left: 20px;
    background-color: whitesmoke;
    border-radius: 3px;
  }
</style>

