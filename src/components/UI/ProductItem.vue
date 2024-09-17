<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button'
import { defineProps } from 'vue';

const props = defineProps(['item', 'btn'])
</script>

<template>
 <Card class="card" style="width: 25rem; overflow: hidden">
    <template #header>
      <router-link :to="{ name: 'Products', params: { id: item.service_id}}">
        <img  alt="user header" :src="props.item.images[0]" />
      </router-link>
    </template>
    <template #title><p class="card-text">{{item.title}}</p></template>
    <template #subtitle><p class="card-text">{{item.dealer}}</p></template>
    <template #content><p class="card-text">{{item.price }}</p></template>
    <template #footer>
      <div id="card-footer">
        <a href="tel:+359876533802">
          <Button id="reviewBtn" class="w-full">
            <p id="btn">{{ btn }}</p>
            <div id="purchase-options">
              <p id="number">0876533802</p>
              <i class="pi pi-phone" style="font-size: 1rem"></i>
            </div>
          </Button>
        </a>
      </div>
    </template>
  </Card> 
</template>

<style scoped> 
  #number {
    display: none;
    font-size: 20px;
  }
  #reviewBtn:hover > a {
    display: block;
  }
  #purchase-options {
    display: flex;
    width: 100%;
    height: 100%;
  }
  #reviewBtn:hover > #btn {
    display: none;
  }

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

  #number {
    font-size: 18px;
  }

  #purchase-options {
    display: flex;
  }

  .card {
    margin: 5px;
  }

  p {
    margin: 0;
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