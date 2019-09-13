<template>
  <div class="add-tab">
    <div class="add-form">
      Name: <input type="text" v-model="name">
      Profesion:<input type="text" v-model="profesion">
      <div class="add-button"
        @click="add({
          name,
          profesion
        })"
      >
        Add Worker
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    name: '',
    profesion: ''
  }),
  methods: {
    ...mapActions([
      'addWorker',
      'closeAddWorker'
    ]),
    add(worker) {
      if(worker && worker.name && worker.profesion) {
        this.addWorker(worker)
        this.closeAddWorker()
      }
    }
  }
}
</script>

<style scoped>
  .add-tab {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #aaf;
    color: black;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    border-left: 10px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .add-form {
    width: max-content;
    height: max-content;
    background-color: #ccf;
    border: 2px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
  }
  .add-form input {
    height: 25px;
    margin-top: 5px;
    margin-bottom: 12px;
    width: 85%;
    border-radius: 0;
    border: 2px solid blue;
    background-color: #aaf;
    text-align: center;
  }

  .add-button {
    font-size: 20px;
    color: #ccf;
    width: max-content;
    height: 36px;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #ccf;
    padding: 0 10px;
    margin-top: 10px;
  }
</style>