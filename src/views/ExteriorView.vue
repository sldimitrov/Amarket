<script setup>
  import scrollTop from '@/services/scrollTop';
  import { onMounted } from 'vue';
  onMounted(() => {
  scrollTop()
  }
)
</script>

<template>
  <section>
    <h1>Coming soon...</h1>
  </section>
</template>

<style scoped>
  section {
    display: flex;
    justify-content: center;
    background: black;
    box-shadow: 0 0 6 grey;
    height: 850px;
  }
  h1 {
    color: white;
    text-align: center;
  }
</style>