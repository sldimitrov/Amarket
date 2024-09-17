<script setup>
import HeaderElement from './components/HeaderElement.vue';
import FooterLine from './components/FooterLine.vue';
</script>

<template>
  <div>
    <HeaderElement />
    <router-view />
    <FooterLine />
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
