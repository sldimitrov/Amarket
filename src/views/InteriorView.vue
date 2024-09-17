<script setup>
import ProductItem from '@/components/UI/ProductItem.vue';
import InputText from 'primevue/inputtext';
import jobData from '@/data/products.json'
import { ref } from 'vue';

const jobs = ref(jobData);
console.log(jobs.value)
</script>

<template>
  <div id="interior">
    <section id="filter">
      <div id="search">
        <h3>Search Bar</h3>
        <InputText id="search-input" type="text" v-model="value" />
      </div>
    </section>
    <section id="products">
      <div id="card" v-for="job in jobs" :key="job.article_number">
        <ProductItem :img="job.images[0]" :title="job.title" :subtitle="job.service_type" :price="job.price + '$'" btn="Purchase"  />
      </div>
    </section>

  </div>
</template>

<style scoped>
  #interior {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
    height: 100%
  }

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

  #search-input {
    width: 90%;
  }

  #products {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 60%;
    height: auto;
    margin-bottom: 20px;
  }

  h3 {
    color: black;
    margin: 0;
  }
  
  @media only screen and (max-width: 641px) {
    #interior {
      flex-direction: column;
      align-items: center;
    }
    #filter {
    width: 40%;
    }
  }

  .card {
    max-width: 300px;
  }

  @media only screen and (max-width: 1040px) {
    .card {
    max-width: 240px;
    }
  }

  @media only screen and (max-width: 840px) and (min-width: 640px) {
    .card {
    max-width: 180px;
    }
  }

  @media only screen and (max-width: 430px) {
    .card {
    max-width: 200px;
    }
  }

  @media only screen and (max-width: 360px) {
    .card {
    max-width: 160px;
    }
  }
</style>