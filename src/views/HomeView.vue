<script setup>
import WelcomePhoto from '@/components/WelcomePhoto.vue';
import CategoriesSection from '@/components/CategoriesSection.vue';
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
  .container {
    box-shadow: 0 0 6px #64646433;
  }
  h1 {
    color: white;
  }
</style>