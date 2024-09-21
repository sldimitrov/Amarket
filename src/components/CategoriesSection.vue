<script setup>
import CardItem from './UI/CardItem.vue';
import steeringWheel from '../assets/accessories/steering-wheel.webp'
import audiExterior from '../assets/accessories/audi_exterior.webp'
import audiAddition from '../assets/accessories/addition.webp'
</script>

<template>
  <div id="categories">
  <h2>Categories</h2>
  <div id="card-collection">
    <CardItem :img="steeringWheel" title="Interior" path="Interior"/>
    <CardItem :img="audiExterior" title="Exterior"  path="Exterior"/>
    <CardItem :img="audiAddition" title="Additional Stuff"  path="Interior"/>
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