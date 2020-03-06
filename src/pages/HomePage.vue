<template>
  <main class="product-page">
    <div class="container">
      <ProductList :products="products"/>
      <Pagination
              :currentPage="currentPage"
              :perPage="productsPerPage"
              :totalProducts="totalProducts"
              @changePage="changePage"/>
    </div>
  </main>
</template>

<script>
  import ProductList from "../components/ProductList";
  import Pagination from "../components/Pagination";
  import axios from "axios";

  export default {
    name: "HomePage",
    components: {
      ProductList,
      Pagination,
    },
    data() {
      return {
        products: [],
        totalProducts: 63,
        currentPage: 1,
        productsPerPage: 6,
      }
    },
    methods: {
      changePage(e) {
        this.$router.push({name: 'home', query: {page: e}});
      },
      getData() {
        axios
          .get(`https://api.musement.com/api/v3/venues/164/activities?limit=${this.productsPerPage}&offset=${this.offset}`, {
            params: {},
            headers: {
              'accept-language': 'it',
              'content-type': 'application/json',
              'x-musement-currency': 'EUR',
              'x-musement-version': '3.4.0'
            }
          })
          .then(response => {
            this.products = response.data;
          });
      }
    },
    computed: {
      offset() {
        return this.currentPage * this.productsPerPage - this.productsPerPage
      }
    },
    watch: {
      $route(to) {
        this.currentPage = parseInt(to.query.page) || 1;
        this.getData()
      }
    },
    mounted() {
      this.getData();

    },
  }
</script>

<style scoped>

</style>