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
    flex-flow: row wrap;
    margin: 0 -10px;
    &__item {
      padding: 10px;
      flex: 1 0 33.3333%;
      max-width: 33.3333%;
    }
  }

</style>