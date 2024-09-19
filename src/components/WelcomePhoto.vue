<script setup>
import carIn from '../assets/car-interior.jpg'
import Button from 'primevue/button';

function learnMoreScroll() {
  window.scrollTo(50, 300)
}
</script>

<template>
  <div class="image-container">
    <img :src="carIn" style="">
    <div class="text-container">
      <h3>The Path to Sustainable Comfort</h3>
      <Button @click="learnMoreScroll" id="learn-more-btn" label="Learn More" severity="secondary" />
    </div>
  </div>
</template>

<style scoped>
  #page {
    width:90%;
  }
  .image-container {
    margin-top: 20px;
    position: relative;
    width: 100%;
    text-align: center;
  }

  #learn-more-btn {
    width: 200px;
    margin-top: 8px
  }

  .text-container {
      position: absolute;      
      height: 110px;
      width: 290px;
      color: black;
      background: white;
      border-radius: 8px;
      left: 70%;
      top: 55%;
      transform: translate(-50%, -50%);
      padding: 0.5rem;
      text-align: center;
      font-size: 16px;
  }

  @media only screen and (max-width: 730px) {
    .text-container {
      width: 150px;
      height: 100px;
    }
    h3 {
      font-size: 15px;
      margin: 0px;
    }
    #learn-more-btn {
    width: 120px;
    margin-top: 9px;
    }
  }

  img {
    width: 100%; max-height: 90vh;    
    box-shadow: 1px 1px black;
  }
  h2 {
    font-size: 38px;
    display: absolute;
    margin: 0px;      
  }
  h3 {
    margin-top: 5px;
  }
</style>
