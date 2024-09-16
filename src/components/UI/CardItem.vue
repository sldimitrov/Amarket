<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button'
import { defineProps } from 'vue';

const props = defineProps(['src', 'title', 'subtitle'])
</script>

<template>
 <Card class="card" style="width: 25rem; overflow: hidden">
    <template #header>
        <img alt="user header" :src="src" />
    </template>
    <template #title>{{props.title}}</template>
    <template #subtitle>{{props.subtitle}}</template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="Review" class="w-full" />
      </div>
    </template>
  </Card> 
</template>

<style scoped>

</style>