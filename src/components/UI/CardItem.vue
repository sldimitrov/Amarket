<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button'
import { defineProps } from 'vue';

const props = defineProps(['img', 'title', 'subtitle'])
</script>

<template>
 <Card class="card" style="width: 25rem; overflow: hidden">
    <template #header>
        <img alt="user header" :src="img" />
    </template>
    <template #title>{{props.title}}</template>
    <template #subtitle>{{props.subtitle}}</template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="Review" class="w-full" />
      </div>
    </template>
  </Card> 
</template>

<style scoped>
  #categories {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #card-collection {
    margin-top: 15px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  @media only screen and (max-width: 1270px) and (min-width: 881px) {
    .card {
      max-width: 280px;
    }
  }

  @media only screen and (max-width: 500px) {
    .card {
      max-width: 250px;
    }
  }

  @media only screen and (max-width: 880px) {
    #card-collection {
      flex-direction: column;
    }
  }

  .card {
    margin: 5px;
  }
  
  img {
    width: 100%;
  }

  h2 {
    margin-top: 30px;
    color: black;
  }
</style>