<template>
  <div class="add-button-keeper">
    <div class="add-button"
      @click="$emit('add')"
    >
      +
    </div>
  </div>
</template>

<style scoped>
  .add-button {
    position: absolute;
    bottom: 1px;
    right: 1px;
    font-size: 30px;
    color: #aaf;
    width: 50px;
    height: 50px;
    background-color: blue;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #aaf;
  }

  .add-button-keeper {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 65px;
    height: 65px;
    background-color: blue;
    border-top-left-radius: 50%;
  }
</style>