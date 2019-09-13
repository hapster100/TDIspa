<template>
  <div class="worker-tab">
    <div class="worker">

      <div class="worker-field">
        <div class="field-label">Name:</div>
        <input
          type="text"
          v-model="name"
          class="field-data" 
          :disabled="!edited"
        />
      </div>
      
      <div class="worker-field">
        <div class="field-label">Profesion:</div>
        <input
          type="text"
          v-model="profesion"
          class="field-data" 
          :disabled="!edited"
        />
      </div>
      
      <div class="worker-field">
        <div class="field-label">Organisation:</div>
        <select
          class="select-data"
          v-model="organisation"
          :disabled="!edited"
        >
          <option value="none">none</option>
          <option v-for="org in organisationList"
            :key="org.name"
            class="select-option"
          >{{org.name}}</option>
        </select>
      </div>

      <div class="action-buttons">

        <div class="edit-button"
          @click="edit">{{ edited ? 'Save' : 'Edit'}}</div>

        <div class="delete-button"
          @click="deleteWorker(props.name)">Delete</div>
      
      </div>
    
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['props'],
  data() {
    return {
      edited: false,
      name: this.props.name,
      profesion: this.props.profesion,
      organisation: this.props.organisation || 'none'
    }
  },
  computed: {
    ...mapGetters([
      'organisationList'
    ])
  },
  methods: {
    ...mapActions([
      'deleteWorker',
      'editWorker'
    ]),
    edit() {
      if(!this.edited) {
        this.edited = true
      } else if(this.name && this.profesion) {
        const editedWorker = {
          name: this.name,
          profesion: this.profesion,
          organisation: this.organisation === 'none' ? '' : this.organisation
        }
        this.editWorker({
          name: this.props.name, 
          editedWorker
        })
        this.edited = false
      }
    }
  }
}
</script>

<style scoped>
  .worker-tab {
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
  .worker {
    width: max-content;
    height: max-content;
    background-color: #ccf;
    border: 2px solid blue;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 30px;
  }
  .worker-field {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .field-label {
    width: 120px;
  }
  .field-data {
    color: black;
    width: 200px;
    background-color: #aaf;
    border: 2px solid blue;
    padding: 5px;
    margin: 5px;
  }

  .select-data {
    color: black;
    width: 214px;
    background-color: #aaf;
    border: 2px solid blue;
    padding: 5px;
    margin: 5px;
  }
  .select-option {
    color: #aaf;
    background: #aaf;
  }
  select {
    appearance: none;
  }
  .action-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    color: white;
    margin-top: 15px;
  }
  .edit-button {
    width: 20%;
    background-color: blue;
    padding: 10px;
    margin-right: 20px;
    text-align: center;
  }
  .delete-button {
    background-color: #f33;
    padding: 10px;
    width: 20%;
    text-align: center;
  }
</style>