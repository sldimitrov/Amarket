<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button'
import phoneHolder from '../assets/accessories/phone-holder.webp'
import steeringWheel from '../assets/accessories/steering-wheel.webp'
import duck from '../assets/accessories/duck.webp'
</script>

<template>
  <div id="categories">
  <h2>Categories</h2>
  <div id="card-collection">
    <Card class="card" style="width: 25rem; overflow: hidden">
    <template #header>
        <img alt="user header" :src="steeringWheel" />
    </template>
    <template #title>Interior</template>
    <template #subtitle>Car Accessories</template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="Review" class="w-full" />
      </div>
    </template>
  </Card>
  <Card class="card" style="width: 25rem; overflow: hidden">
    <template #header>
        <img alt="user header" :src="phoneHolder" />
    </template>
    <template #title>Exterior</template>
    <template #subtitle>Car Accessories</template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="Review" class="w-full" />
      </div>
    </template>
  </Card>
  <Card class="card" style="width: 25rem; overflow: hidden">
    <template #header>
        <img alt="user header" :src="duck" />
    </template>
    <template #title>Additional Stuff</template>
    <template #subtitle>Car Accessories</template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="Review" class="w-full" />
      </div>
    </template>
  </Card>
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