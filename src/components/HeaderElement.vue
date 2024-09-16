<script setup>
</script>

<template>
  <header>
    <h1>
      Car Accessories
    </h1>
    <ul>
      <li>
        Interior
      </li>
      <li>
        Exterior
      </li>
      <li>
        Contacts
      </li>
    </ul>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    align-items: center;
    background: rgb(61, 11, 52);
    justify-content: space-around;
    width: 100%;
    height: 70px;
  }
  ul {
    display: flex;
    width: 16em;
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
    color: gold;
    text-decoration: underline;
  }
</style>