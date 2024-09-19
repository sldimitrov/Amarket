<script setup>
import Card from 'primevue/card';
import { defineProps } from 'vue';
import PurchaseBtn from './PurchaseBtn.vue';

const props = defineProps(['item'])
</script>

<template>
 <Card class="card" style="width: 25rem; overflow: hidden">
    <template #header>
      <router-link :to="{ name: 'Products', params: { id: item.service_id}}">
        <img  alt="user header" :src="props.item.images[0]" />
      </router-link>
    </template>
    <template #title><p class="card-text">{{item.title}}</p></template>
    <template #subtitle><p class="card-text">{{item.dealer}}</p></template>
    <template #content><p class="card-text">{{item.price }}</p></template>
    <template #footer>
      <PurchaseBtn />
    </template>
  </Card> 
</template>

<style scoped> 
  .card {
    margin: 6px;
  }

  

  p {
    margin: 0;
  }

  .card-text {
    margin: 0px;
    text-align: center;
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

  img {
    width: 100%;
  }
</style>