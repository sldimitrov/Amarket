<script setup>
import {defineProps} from 'vue';
import InputText from 'primevue/inputtext';

const props = defineProps(['handleSearch'])
</script>

<template>
  <section id="filter">
    <div id="search">
      <h3>Search</h3>
      <InputText id="search-input" @input="props.handleSearch" type="text" />
    </div>
  </section>
</template>


<style scoped>
  #filter {
    display: flex;
    justify-content: center;
    width: 12%;
    height: auto;
    background: #f8f8f8;
    border-radius: 10px;
    margin-bottom: 25px;
  }


  #search {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 90px;
  }

  #empty-search {
    text-align: center;
  }

  #search-input {
    width: 90%;
  }
</style>