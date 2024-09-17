<script setup>
  import ContactsUs from '@/components/ContactsUs.vue';
  import FormField from '@/components/UI/FormField.vue';
</script>

<template>
  <section>
    <ContactsUs />
    <FormField />
  </section>
</template>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    margin-top: 40px;
    min-height: 800px;
  }
</style>