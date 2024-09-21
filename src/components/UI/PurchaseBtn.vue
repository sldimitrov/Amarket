<script setup>
import Button from 'primevue/button';
</script>

<template>
  <a href="tel:+359876533802">
  <Button id="reviewBtn" class="w-full">
    <i class="pi pi-phone" style="font-size: 1rem"></i>
    <p id="btn">Purchase</p>
  </Button>
</a>
</template>

<style scoped>
  a {
    text-decoration: none;
  }
  #reviewBtn {
    height: 35px;
    width: 100%;
  }
  #reviewBtn:hover {
    background: black;
    color: greenyellow;
    border: 2px solid green;
  }
</style>