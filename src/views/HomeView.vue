<script setup>
import LastlyAdded from '@/components/LastlyAdded.vue';
import ContactsUs from '@/components/ContactsUs.vue';
import FooterLine from '@/components/FooterLine.vue';
</script>

<template>
  <div class="container">
    <welcome-photo />
    <categories-section />
    <lastly-added />
    <contacts-us />
    <footer-line />
  </div>
</template>

<style scoped>
  h1 {
    color: white;
  }
</style>