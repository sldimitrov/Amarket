<script setup>
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import emailjs from '@emailjs/browser';
import { ref } from 'vue';

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

function setValue(event, value) {
  if (value === 'name') {
    name.value = event.target.value
  } else if (value === 'email') {
    email.value = event.target.value
  } else if (value === 'subject') {
    subject.value = event.target.value
  } else {
    message.value = event.target.value
  }
}

function sendEmail(e) {
  // if (name.value && name.value.trim() || email.value && email.value.trim() ) {
  //   let params = {
  //   name: name.value,
  //   email: email.value,
  //   subject: subject.value,
  //   message: message.value,
  // };
  emailjs.sendForm('service_43e66zn', 'template_wu3pvfo', this.$refs.form, {
      publicKey: 'ZNA6rCUzJJOCR6CQq',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
  e.preventDefault()
  }
</script>

<template>
  <div id="form-section">
    <h2>Send an Email</h2>
    <VeeForm ref="form" @submit.prevent="sendEmail">
      <div id="form-inputs">
        <div id="left">
        <label for="name">Name</label>
        <VeeField name="name" @input="setValue($event, 'name')" type="text" rules="required" />
        <VeeErrorMessage name="name" class="form-error" />
        <label for="email">Email</label>
        <VeeField name="email"  @input="setValue($event, 'email')" type="text" rules="required" />
        <VeeErrorMessage name="email" class="form-error" />
        <label for="subject">Subject</label>
        <VeeField name="subject" @input="setValue($event, 'subject')" type="text" rules="required" />
        <VeeErrorMessage name="subject" class="form-error" />
      </div>
      <div id="right">
        <label for="name">Message</label>
        <Textarea @input="setValue" autoResize rows="10" cols="20" />
      </div>
      </div>
      <Button class="btn" type="submit" label="Send" />
    </VeeForm>
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

  .form-error {
    display: flex;
    justify-content: center;
    background: hsla(348, 100%, 84%, 0.717);
    border-radius: 25px;
    padding: 2px;
    color: rgb(201, 1, 1);
    margin-top: 1px;
  }
</style>