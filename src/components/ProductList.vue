<template>
  <ul class="product-list">
    <li class="product-list__item" v-for="product in products" :key="product.uuid">
      <Product :product="product"/>
    </li>
  </ul>
</template>

<script>
  import Product from "./Product";

  export default {
    name: "ProductList",
    components: {
      Product
    },
    props: {
      products: Array,
    }
  }
</script>

<style scoped lang="scss">
  .product-list {
    display: flex;
    flex: 0 1 auto;
    flex-flow: column wrap;
    margin: 0 -10px;
    &__item {
      padding: 10px;
      @media (min-width: 768px){
        flex: 1 0 50%;
        /*max-width: 50%;*/
      }
      @media (min-width: 1200px) {
        flex: 1 0 33.3333%;
        max-width: 33.3333%;
      }
    }
    @media (min-width: 768px){
      flex-flow: row wrap;
    }
    @media (min-width: 1200px) {
      flex-flow: row wrap;
    }
  }

</style>