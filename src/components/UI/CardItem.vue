<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button'
import { defineProps } from 'vue';

const props = defineProps(['img', 'title', 'price', 'cardSpecific', 'path'])
</script>

<template>
 <Card class="card" style="width: 25rem; overflow: hidden">
    <template #header>
        <img alt="user header" :src="img" />
    </template>
    <template #title><p class="card-text">{{props.title}}</p></template>
    <template #subtitle><p class="card-text">{{cardSpecific.subtitle}}</p></template>
    <template #content><p class="card-text">{{ props.price }}</p></template>
    <template #footer>
      <div id="btn-ctn" class="flex gap-4 mt-1">
        <Button id="reviewBtn" class="w-full">
          <router-link id="review-btn-txt" :to="{ name: props.path}">
            {{cardSpecific.btn}}
          </router-link>
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