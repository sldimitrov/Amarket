<script setup>

</script>


<template>
  <div id="cnt-container">
    <h2>Contact Us</h2>
    <div id="cnt-info">
    <p>
      <i class="pi pi-envelope" style="font-size: 2rem"></i>
      slavidimitrov54@gmail.com
    </p>
    <p>
      <i class="pi pi-phone" style="font-size: 2rem"></i>
      0876533802
    </p>
    <p>
      <i class="pi pi-facebook" style="font-size: 2rem"></i>
      facebook/CarAccessories
    </p>
    </div>
  </div>
</template>


<style scoped>
  h2, p {
    color: black;
    text-align: center;
  }

  #cnt-container {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  #cnt-info {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
  }

  @media only screen and (max-width: 750px) {
    #cnt-info { 
      flex-direction: column
    }
  }

  p {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60px;
    font-size: 17px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
</style>