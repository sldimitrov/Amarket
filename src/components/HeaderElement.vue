<script setup>

</script>

<template>
  <header>
    <h1>
      Car Accessories
    </h1>
    <ul>
      <li>
        Home
      </li>
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
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 0 6px #64646433;
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
    color: gold;
    text-decoration: underline;
  }
</style>