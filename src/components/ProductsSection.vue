<script setup>
import {defineProps} from 'vue'
import ProductItem from '@/components/UI/ProductItem.vue';

const props = defineProps(['filteredJobs'])
</script>


<template>
  <section id="products">
    <template v-if="props.filteredJobs.length">
      <div id="card" v-for="job in props.filteredJobs" :key="job.article_number">
        <ProductItem :item="job" />
      </div>
    </template>
    <template v-else>
      <div id="backup">
        <h2 id="empty-search">No items mathing your search.</h2>
      </div>
    </template>
  </section>
</template>

<style scoped>
  #interior {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
    height: 100%
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
      align-items: center;
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