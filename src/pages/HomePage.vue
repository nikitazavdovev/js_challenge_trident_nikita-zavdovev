<template>
  <main class="product-page">
    <div class="container" v-if="products.length">
      <ProductList :products="products" />
      <Pagination
        :currentPage="currentPage"
        :perPage="productsPerPage"
        :totalProducts="totalProducts"
        @changePage="changePage"
      />
    </div>
  </main>
</template>

<script>
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import ActivitiesApi from "../api/ActivitiesApi";

export default {
  name: "HomePage",
  components: {
    ProductList,
    Pagination
  },
  data() {
    return {
      products: [],
      totalProducts: 63,
      currentPage: 1,
      productsPerPage: 6
    };
  },
  methods: {
    changePage(e) {
      this.$router.push({ name: "home", query: { page: e } });
    },
    getData() {
      ActivitiesApi.getActivities({
        limit: this.productsPerPage,
        offset: this.offset,
      }).then(response => {
        this.products = response.data;
      });
    }
  },
  computed: {
    offset() {
      return this.currentPage * this.productsPerPage - this.productsPerPage;
    }
  },
  watch: {
    $route(to) {
      this.currentPage = parseInt(to.query.page) || 1;
      this.getData();
    }
  },
  mounted() {
    this.currentPage = parseInt(this.$router.history.current.query.page) || 1;
    this.getData();
  }
};
</script>

<style scoped></style>
