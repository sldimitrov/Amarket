<script setup>
</script>

<template>
  <header>
    <h1>
      <router-link id="title" :to="{ name: 'Home'}">Car Accessories</router-link>
     
    </h1>
      <div class="dropdown">
        <button>Pages</button>
        <div class="content">
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
        </div>
      </div>
  </header>
</template>

<style scoped>
  .dropdown button {
    display: none;
  }
  @media only screen and (max-width: 350px) {
    .dropdown {
    z-index: 1;
    margin-top: 15px;
    width: 100px;
    }

    .dropdown button {
      display: flex;
      justify-content: center;
      border-radius: 5px;
      width: 80px;
      background-color: hsl(0, 0%, 80%);
      padding: 10px 15px;
      border: none;
      cursor: pointer;;
    }
    .dropdown ul {
      display: block;
      color: black;
      width: 80px;
      border-radius: 10px;
      padding: 10px 15px;
    }
    .dropdown .content {
      display: none;
      position: absolute;
      background-color: hsl(0, 0%, 95%);
      height: 90px;
      box-shadow: 2px 2px 5px hsla(0, 0%, 0%, 0.808);
    }

    .dropdown:hover .content {
      display: block;
    }
    .dropdown:hover button {
      background-color: hsl(0, 0%, 70%);
    }
    .dropdown li:hover {
      background-color: hsl(0,0%, 90%);
      }
    }
  


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
    padding-left: 0px;
    margin: 0px;
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

  .link ,#title {
    color: black;
    text-decoration: none;
  }

  .link:hover {
    color: blue;
  }
</style>