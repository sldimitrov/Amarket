<script setup>
  import FloatLabel from 'primevue/floatlabel';
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
</script>

<template>
  <div id="form-section">
    <h2>Send an Email</h2>
    <form action="submit">
      <div id="left">
        <FloatLabel>
          <InputText id="username" />
          <label for="username">Name</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="email" />
          <label for="email">Email</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="age" />
          <label for="age">Age</label>
        </FloatLabel>
      </div>
      <div id="right">
        <FloatLabel>
          <InputText id="username" />
          <label for="username">Town</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="username" />
          <label for="username">Gender</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="email" />
          <label for="email">Message</label>
        </FloatLabel>
      </div>
    </form>
    <Button class="btn" label="Send" />
  </div>
</template>

<style scoped>
  h2{
    color: black;
  }
  #form-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 6 6 6 grey;
    width: 100%;
    min-height: 450px;
    background: #f8f8f8;
  }
  
  form{
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
  }
  @media screen and (max-width: 600px) {
    form {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 400px;
    }
  }
  #left, #right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 180px;
  }

  .btn {
    margin-top: 30px;
    font-size: 16px;
    width: 110px;
  }
</style>