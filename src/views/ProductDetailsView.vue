<script setup>
import { useRoute } from 'vue-router';
import productsData from '@/data/products.json'
const products = productsData;

const route = useRoute()
const id = route.params.id
const currentProduct = products.filter(product => product.service_id === id)
</script>


<template>
  <h2>{{ currentProduct[0].title }}</h2>
  <h3>{{ currentProduct[0].dealer }}</h3>
</template>


<style scoped>
  h2, h3 {
    color: black;
    text-align: center;
  }
</style>