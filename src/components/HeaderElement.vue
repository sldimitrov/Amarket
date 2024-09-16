<script setup>

</script>

<template>
  <header>
    <h1>
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
    width: 100%;
    height: 70px;
  }
  h1 {
    padding-top: 8px;
    font-size: 30px;
  }
  ul {
    display: flex;
    width: 18em;
    height: 30px;
    align-items: end;
    justify-content: space-around;
    padding-left: 0px
  }
  li {
    list-style: none;
    font-size: 19px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  @media only screen and (max-width: 730px) {
    h1 {
    font-size: 22px;
    }
    ul {
    width: 16em;
    }
    li {
      font-size: 16px;
    }
    }
    @media only screen and (max-width: 420px) {
    h1 {
    font-size: 18px;
    padding-top: 14px;
    }
    ul {
    width: 14em;
    }
    li {
      font-size: 13px;
    }
  }

  .link {
    color: black;
    text-decoration: none;
  }

  .link:hover {
    color: blue;
  }
</style>