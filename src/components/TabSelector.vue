<template>
  <div class="tab-selector">
    <div v-for="opt in options"
      :key="opt.title"
      :class="optClassArr(opt.title)"
      @click.self="changeActive(opt.title)"
    >
      {{opt.title}}
      <span class="close"
        @click='closeTab(opt.title)'
      >
        x
      </span>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: ['options', 'active'],
  computed: {
    optClassArr() {
      return (title) => {
        const classes = []
        if(title === this.active) classes.push('active')
        classes.push('tab-option')
        return classes
      }
    }
  },
  methods: {
    ...mapActions([
      'changeActive',
      'closeTab'
    ])
  }
}
</script>

<style scoped>
  .tab-selector {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    background-color: #ccf;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .tab-option {
    height: 30px;
    text-align: center;
    width: 200px;
    background-color: #aaf;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-right: 1px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .active {
    background-color: blue;
    color: white;
  }

  .close {
    color: black;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: #aaf;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    margin: 0;
  }
</style>