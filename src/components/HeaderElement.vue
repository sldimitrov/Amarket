<script setup>

</script>

<template>
  <header>
    <h1>
      <i class="pi pi-bolt" style="font-size: 1.5rem; margin-right: 5px"></i>
      Car Accessories
    </h1>
    <ul>
      <li>
        <router-link class="link" :to="{ name: 'Home'}">Home</router-link>
      </li>
      <li>
        <router-link class="link"  :to="{ name: 'Interior'}">Interior</router-link>
      </li>
      <li>
        <router-link class="link"  :to="{ name: 'Exterior'}">Exterior</router-link> 
      </li>
      <li>
        <router-link class="link"  :to="{ name: 'Contacts'}">Contacts</router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
  header {
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: white;
    border-bottom: 1px solid black;
    width: 100%;
    height: 70px;
  }
  ul {
    display: flex;
    width: 17em;
    height: 30px;
    align-items: end;
    justify-content: space-around;
    padding-left: 0px
  }
  li {
    list-style: none;
    font-size: 18px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  li:hover {
    text-decoration: underline;
  }

  .link {
    color: black;
    text-decoration: none;
  }
</style>