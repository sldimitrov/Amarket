<script setup>
import Textarea from 'primevue/textarea';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';

const name = ref('')
const email = ref('')
const age = ref('')
const message = ref('')

function setValue(event, value) {
  if (value === 'name') {
    name.value = event.target.value
  } else if (value === 'email') {
    email.value = event.target.value
  } else if (value === 'age') {
    age.value = event.target.value
  } else {
    message.value = event.target.value
  }
}

function sendEmail() {
  console.log({
    name: name.value,
    email: email.value,
    age: age.value,
    message: message.value,
  })
}
</script>

<template>
  <div id="form-section">
    <h2>Send an Email</h2>
    <form @submit.prevent="sendEmail" action="submit">
      <div id="form-inputs">
        <div id="left">
        <label for="name">Name</label>
        <InputText required @input="setValue($event, 'name')" type="text" />
        <label for="name">Email</label>
        <InputText required @input="setValue($event, 'email')" type="text" />
        <label for="name">Age</label>
        <InputText required @input="setValue($event, 'age')" type="text" />
      </div>
      <div id="right">
        <label for="name">Message</label>
        <Textarea required @input="setValue" autoResize rows="10" cols="25" />
      </div>
      </div>
      <Button class="btn" type="submit" @click="sendEmail" label="Send" />
    </form>
  </div>
</template>

<style scoped>
  h2{
    color: black;
  }
  label {
    color: black;
    padding-left: 5px;
  }

  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  
  #txtarea {
    background: black;
    border-radius: 5px;
    width: 220px;
  }
  
  #form-inputs {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
  }
  @media screen and (max-width: 600px) {
    #form-inputs {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 400px;
    }

    .btn {
      margin-bottom: 15px;
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