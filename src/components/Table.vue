<template>
  <table>
    <tr>
      <th v-for="fieldTitle in rowFields"
        :key="fieldTitle"
      >
        {{fieldTitle.charAt(0).toUpperCase() + fieldTitle.substring(1)}}
      </th>
    </tr>
    <tr v-for="rowData in tableData"
      :key="rowData[rowFields[0]]"
      @click="$emit('return', rowData)"
    >
      <td v-for="field in rowFields"
        :key="field"
      >
        {{rowData[field] || 'none'}}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ['tableData'],
  computed: {
    rowFields: function() {
      const keys = []
      const dataObj = this.tableData[0]
      for (const key in dataObj) {
        if (dataObj.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
      return keys;
    }
  }
}
</script>

<style scoped>
  table {
    height: max-content;
    width: 100%;
    border-collapse: collapse;
    border: 2px solid blue;
  }
  th {
    height: 50px;
    border: 2px solid blue;
    border-right-color: blue;
    border-right-width: 2px;
    background-color: #aaaaff;
  }
  td {
    height: 40px;
    border: 1px solid #aaaaff;
    background-color: #f5f5f5;
    border-right-width: 2px;
    border-right-color: blue;
    padding-left: 10px;
  }
  tr:hover td {
    background-color: #ccf;
  }
</style>