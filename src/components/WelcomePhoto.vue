<script setup>
import carIn from '../assets/car-interior.webp'
</script>

<template>
  <div id="page">
    <img :src="carIn" alt="A car interior">
  </div>
</template>

<style scoped>
  #page {
    display: flex;
    justify-content: center;
    width: 70%;
  }
  img {
    width: 100%;
    border-radius: 5px;
  }
</style>
