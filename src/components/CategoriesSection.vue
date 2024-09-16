<script setup>
import CardItem from './UI/CardItem.vue';
import phoneHolder from '../assets/accessories/phone-holder.webp'
import steeringWheel from '../assets/accessories/steering-wheel.webp'
import duck from '../assets/accessories/duck.webp'
</script>

<template>
  <div id="categories">
  <h2>Categories</h2>
  <div id="card-collection">
    <CardItem :img="steeringWheel" title="Interior" subtitle="Car Accessories"/>
    <CardItem :img="phoneHolder" title="Exterior" subtitle="Car Accessories"/>
    <CardItem :img="duck" title="Additional Stuff" subtitle="Car Accessories"/>
  </div>
</div>
</template>

<style scoped>
  #categories {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #card-collection {
    margin-top: 15px;
    display: flex;
    width: 100%;
    justify-content: space-between;
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

  @media only screen and (max-width: 880px) {
    #card-collection {
      flex-direction: column;
    }
  }

  .card {
    margin: 5px;
  }
  
  img {
    width: 100%;
  }

  h2 {
    margin-top: 30px;
    color: black;
  }
</style>