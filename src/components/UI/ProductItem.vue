<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button'
import { defineProps } from 'vue';

function openViberChat(product) {
  const phoneNumber = '+359876533802'; // Replace with your Viber number
  const message = `I'm interested in purchasing ${product.name}`;

  // Construct the deep link URL
  const viberUrl = `viber://add?number=${phoneNumber}&message=${encodeURIComponent(message)}`;

  // Open the URL in a new tab
  window.open(viberUrl, '_blank');
}

const props = defineProps(['img', 'title', 'subtitle', 'price', 'btn',])
</script>

<template>
 <Card class="card" style="width: 25rem; overflow: hidden">
    <template #header>
        <img alt="user header" :src="img" />
    </template>
    <template #title><p class="card-text">{{props.title}}</p></template>
    <template #subtitle><p class="card-text">{{props.subtitle}}</p></template>
    <template #content><p class="card-text">{{ props.price }}</p></template>
    <template #footer>
      <div id="btn-ctn" class="flex gap-4 mt-1">
        <Button id="reviewBtn" @click="openViberChat" class="w-full">
          {{ btn }}
        </Button>
      </div>
    </template>
  </Card> 
</template>

<style scoped>
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

  .card {
    margin: 5px;
  }

  .card-text {
    margin: 0px;
    text-align: center;
  }

  #reviewBtn {
    width: 55%;
  }

  #btn-ctn {
    display: flex;
    justify-content: center;
  }

  #review-btn-txt {
    font-size: 18px;
    color: white;
    text-decoration: none;
  }
  
  img {
    width: 100%;
  }
</style>