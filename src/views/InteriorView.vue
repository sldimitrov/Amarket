<script setup>
import ProductItem from '@/components/UI/ProductItem.vue';
import InputText from 'primevue/inputtext';
import jobData from '@/data/products.json'
import { computed, ref } from 'vue';

const jobs = jobData;


const searchFilter = ref('')

const filteredJobs = computed(() => {
  if (searchFilter.value != '') {
    return jobs.filter(
     item => item.title.toLowerCase().includes(searchFilter.value.toLowerCase()) ||
     item.dealer.toLowerCase().includes(searchFilter.value.toLowerCase())
    );
  }

  return jobs
})

const handleSearch = (search) => {
  searchFilter.value = search.target.value

}
</script>

<template>
  <div id="interior">
    <section id="filter">
      <div id="search">
        <h3>Search</h3>
        <InputText id="search-input" @input="handleSearch" type="text" />
      </div>
    </section>
    <section id="products">
      <template v-if="filteredJobs.length">
        <div id="card" v-for="job in filteredJobs" :key="job.article_number">
          <ProductItem :item="job" />
        </div>
      </template>
      <template v-else>
        <div id="backup">
          <h2 id="empty-search">No items mathing your search.</h2>
        </div>
      </template>
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

  #empty-search {
    text-align: center;
  }

  #search-input {
    width: 90%;
  }

  #backup {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    color: black;
  }

  #products {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 60%;
    height: auto;
    margin-bottom: 20px;
    min-height: 800px;

  }

  h3 {
    color: black;
    margin: 0;
  }
  
  @media only screen and (max-width: 641px) {
    #interior {
      flex-direction: column;
      align-items: start;
    }
    #filter {
    width: 50%;
    margin: 0;
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