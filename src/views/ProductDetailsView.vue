<script setup>
import { useRoute } from 'vue-router';
import PurchaseBtn from '@/components/UI/PurchaseBtn.vue';
import productsData from '@/data/products.json'
import LastlyAdded from '@/components/LastlyAdded.vue';
const products = productsData;

const route = useRoute()
const id = route.params.id
const currentProduct = products.filter(product => product.service_id === id)
</script>


<template>
  <section>
    <div id="product-details">
      <figure>
        <p v-if="currentProduct[0].discount_percentages > 0" id="discount">-{{currentProduct[0].discount_percentages}}%</p>
        <img :src="currentProduct[0].images[0]" alt="">
      </figure>
      <div id="product-info">
        <h2 id="title">{{currentProduct[0].title}}</h2>
        <h3><span class="label">Dealer:</span> {{currentProduct[0].dealer}}</h3>
        <h3><span class="label">Service Type:</span> {{currentProduct[0].service_type}}</h3>
        <h3 id="id-num"><span class="label">Артикулен номер №:</span>&nbsp;{{currentProduct[0].service_id}}</h3>
        <div id="pricing" v-if="currentProduct[0].discount_percentages != 0">
          <h2 id="onsale">{{ currentProduct[0].discount_price }}лв.</h2>
          <h3 id="original-price"><span class="label">&nbsp;{{ currentProduct[0].price }}</span></h3>
        </div>
        <h3 v-else id="onsale">
          {{ currentProduct[0].price }}лв.
        </h3>
        <div id="purchase">
          <PurchaseBtn />
        </div>
      </div>
    </div>
    <LastlyAdded />
  </section>
</template>


<style scoped>
  #product-details {
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    margin-top: 30px;
  }

  #product-info {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 15px;
  }

  #title {
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 15px;
  }

  #pricing {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 12npm0px;
  }

  #discount {
    position: absolute;
    margin-top: 20px;
    margin-left: 20px;
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(241, 93, 135);
  }

  #onsale {
    font-size: 35px;
  }

  #id-num {
    color: #337ab7;
  }


  #original-price {
    font-size: 23px;
    text-decoration: line-through;
  }

  .label {
    color: #999;
  }

  #purchase {
    width: 220px;
    margin-bottom: 10px;
  }

  img {
    max-width: 550px;
  }
  
  figure {
    margin: 0px;
  }

  h2, h3 {
    color: black;
    text-align: center;
    margin-bottom: 6px;
  }
  @media only screen and (max-width: 900px) {
    #product-details {
      flex-direction: column;
      align-items: center;
    }
    #product-info {
      align-items: center;
    }
  }
  @media only screen and (max-width: 551px) {
    img {
      width: 100%;
    };
  }
  @media only screen and (max-width: 430px) {
    h2 {
      font-size: 22px
    }
    h3 {
      font-size: 16px
    }
    #onsale {
      font-size: 20px;
    }
    #original-price {
      font-size: 16px;
    }
    #discount {
    font-size: 25px;
    }
  }
</style>