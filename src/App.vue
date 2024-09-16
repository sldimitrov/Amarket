<script setup>
import HeaderElement from './components/HeaderElement.vue';
</script>

<template>
  <div>
    <HeaderElement />
    <router-view />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
}
</style>
