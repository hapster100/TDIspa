<template>
  <div class="org-tab">
    <div class="org">
      <div class="org-info">
        <div class="org-field">
          <div class="field-label">Name:</div>
          <input
            type="text"
            v-model="name"
            class="field-data" 
            :disabled="!edited"
          />
        </div>
        <div class="org-field">
          <div class="field-label">City:</div>
          <input
            type="text"
            v-model="city"
            class="field-data" 
            :disabled="!edited"
          />
        </div>
        <div class="action-buttons">
          <div class="edit-button"
            @click="edit">{{ edited ? 'Save' : 'Edit'}}</div>
          <div class="delete-button"
            @click="deleteOrganisation(props.name)">Delete</div>
        </div>
      </div>
      <div class="workers-info">
        <div class="workers-counter">
          Workers: {{props.workers}}
        </div>
        <div class="workers-list">
          <div v-for="worker in workersList"
            :key="worker.name"
            class="list-item"
            @click.self="openWorker(worker)"
          >
            {{worker.name}}
            <div class="dismiss-button"
              @click.self="dismissWorker(worker)"
            >
              dismiss
            </div>
          </div>
        </div>
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
      city: this.props.city
    }
  },
  computed: {
    ...mapGetters([
      'orgWorkersList'
    ]),
    workersList() {
      const list = this.orgWorkersList(this.props.name)
      return list
    }
  },
  methods: {
    ...mapActions([
      'deleteOrganisation',
      'openWorker',
      'dismissWorker',
      'editOrganisation'
    ]),
    edit() {
      if(!this.edited) {
        this.edited = true
      } else if(this.name && this.city) {
        const editedOrganisation = {
          name: this.name,
          city: this.city,
          workers: this.workersList.length
        }
        this.editOrganisation({
          name: this.props.name, 
          editedOrganisation
        })
        this.edited = false
      }
    }
  }
}
</script>

<style scoped>
  .org-tab {
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
  .org {
    width: max-content;
    height: max-content;
    background-color: #ccf;
    border: 2px solid blue;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 30px;
    padding-top: 20px;
  }
  .org-info {
    margin-right: 30px;
    padding-top: 14px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .workers-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .org-field {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .field-label {
    width: 80px;
  }
  .field-data {
    color: black;
    width: 200px;
    background-color: #aaf;
    border: 2px solid blue;
    padding: 5px;
    margin: 5px;
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
  .workers-list {
    height: 200px;;
    min-width: 250px;
    padding: 10px 20px;
    background-color: #aaf;
    border: 2px solid blue;
    overflow: hidden;
    overflow-y: scroll;
  }
  .list-item {
    height: 25px;
    background-color: #ccf;
    margin: 5px 0;
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .dismiss-button {
    padding: 2px;
    height: 22px;
    background-color: #f33;
    border: 2px solid #aaf; 
    color: white;
    font-size: 14 px;
  }
  .list-item:hover {
    background-color: #aaf;
    border: 2px solid #ccf;
    height: 26px;
  }
  .list-item:hover > .dismiss-button {
    border-color: #ccf;
  }
</style>