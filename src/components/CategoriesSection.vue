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
    <CardItem :img="steeringWheel" title="Interior" subtitle="Car Accessories" path="Interior"/>
    <CardItem :img="phoneHolder" title="Exterior" subtitle="Car Accessories" path="Exterior"/>
    <CardItem :img="duck" title="Additional Stuff" subtitle="Car Accessories" path="Interior"/>
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

  @media only screen and (max-width: 880px) {
    #card-collection {
      flex-direction: column;
    }
  }

  h2 {
    font-size: 27px;
    margin-top: 30px;
    color: black;
  }
</style>