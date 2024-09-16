<script setup>

</script>


<template>
  <section id="last-added">
    <div>
      <h2>Lasty Added</h2>
      <section id="photo-slider">
        <h3>Photo Slider</h3>
      </section>
    </div>
  </section>
</template>


<style scoped>
  #last-added {
    display: flex;
    justify-content: center;
    background: rgba(242, 240, 240, 0.881);
    margin-top: 15px;
    width: 100%;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: grey;
    height: 400px;
    width: 80%;
  }
  h2 {
    color: black;
  }
</style>