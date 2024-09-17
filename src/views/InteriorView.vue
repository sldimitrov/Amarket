<script setup>
// const products = [
//   {
//     article_number: "409013",
//     brand: "Volkl",
//     discount_percentages: 0,
//     discount_price: 100,
//     images: [
//       'https://cf-cdn-v6-api.audi.at/files/34bc8116c9888b1c5c25735b4d68e4705cfa7947/162d566b-359c-4df4-8d00-041e0cd7d3f1/a320235644lichtsignatur-s-l',
//       'https://www.coc-online.com/cdn/shop/files/ECCertificateofConformityAUDI.png?v=1701435816',
//       'https://cf-cdn-v6-api.audi.at/files/a051c46236fef918380c748834e0b5ef5ab8b5df/281565fe-6f9b-469c-924e-50eeec29a1c8/810x1080-rs720201544',
//     ],
//     price: 100,
//     product_type: "ski",
//     size: 156,
//     title: "Volkl Energy"
//   },
//   {
//     article_number: "409013",
//     brand: "Volkl",
//     discount_percentages: 0,
//     discount_price: 100,
//     images: [
//       'https://cf-cdn-v6-api.audi.at/files/34bc8116c9888b1c5c25735b4d68e4705cfa7947/162d566b-359c-4df4-8d00-041e0cd7d3f1/a320235644lichtsignatur-s-l',
//       'https://www.coc-online.com/cdn/shop/files/ECCertificateofConformityAUDI.png?v=1701435816',
//       'https://cf-cdn-v6-api.audi.at/files/a051c46236fef918380c748834e0b5ef5ab8b5df/281565fe-6f9b-469c-924e-50eeec29a1c8/810x1080-rs720201544',
//     ],
//     price: 100,
//     product_type: "ski",
//     size: 156,
//     title: "Volkl Energy"
//   },
//   {
//     article_number: "409013",
//     brand: "Volkl",
//     discount_percentages: 0,
//     discount_price: 100,
//     images: [
//       'https://cf-cdn-v6-api.audi.at/files/34bc8116c9888b1c5c25735b4d68e4705cfa7947/162d566b-359c-4df4-8d00-041e0cd7d3f1/a320235644lichtsignatur-s-l',
//       'https://www.coc-online.com/cdn/shop/files/ECCertificateofConformityAUDI.png?v=1701435816',
//       'https://cf-cdn-v6-api.audi.at/files/a051c46236fef918380c748834e0b5ef5ab8b5df/281565fe-6f9b-469c-924e-50eeec29a1c8/810x1080-rs720201544',
//     ],
//     price: 100,
//     product_type: "ski",
//     size: 156,
//     title: "Volkl Energy"
//   }
// ]
// import CardItem from '@/components/UI/CardItem.vue';
</script>

<template>
  <div id="interior">
    <section id="filter">
      <h3>Search...</h3>
    </section>
    <section  id="products">
      <!-- <CardItem :img="product.images[0]" :title="product.title" :subtitle="product.product_type" path=""  /> -->
    </section>
  </div>
</template>

<style scoped>
  #interior {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  #filter {
    display: flex;
    justify-content: center;
    width: 15%;
    height: auto;
    background: #f8f8f8;
  }
  
  @media only screen and (max-width: 600px) {
    #interior {
      flex-direction: column;
      align-items: center;
    }
    #filter {
    width: 50%;
    }
  }

  #products {
    width: 50%;
    height: auto;
    background: gold;
  }
  h3 {
    color: black;
  }
</style>