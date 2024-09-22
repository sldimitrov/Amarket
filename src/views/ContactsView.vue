<script setup>
  import ContactsUs from '@/components/ContactsUs.vue';
  import FormField from '@/components/UI/FormField.vue';
  import scrollTop from '@/services/scrollTop';
  import { onMounted } from 'vue';
  onMounted(() => {
  scrollTop()
  }
)
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
    box-shadow: 0 0 6 grey;
    margin-top: 40px;
    min-height: 800px;
  }
</style>