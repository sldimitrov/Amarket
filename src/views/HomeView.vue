<script setup>
import LastlyAdded from '@/components/LastlyAdded.vue';
import ContactsUs from '@/components/ContactsUs.vue';
</script>

<template>
  <div class="container">
    <welcome-photo />
    <categories-section />
    <lastly-added />
    <contacts-us />
  </div>
</template>

<style scoped>
  h1 {
    color: white;
  }
</style>