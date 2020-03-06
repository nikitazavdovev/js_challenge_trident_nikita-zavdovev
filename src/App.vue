<template>
  <div id="app">
    <Header :title="'BRAND'"/>
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
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import axios from 'axios';

export default {
  name: "App",
  components: {
    Header,
    ProductList,
    Pagination,
    Footer
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
      this.currentPage = e;
      this.getData()
    },
    getData() {
      axios
        .get(`https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=${this.offset}`, {
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
  mounted() {
    this.getData()
  }
};
</script>

<style lang="scss">
  @font-face{
    font-family: 'Lato-Bold';
    src: url('./assets/fonts/Lato-Bold.ttf') format('ttf');
  }

  @font-face{
    font-family: 'Lato-BoldItalic';
    src: url('./assets/fonts/Lato-BoldItalic.ttf') format('ttf');
  }

  @font-face{
    font-family: 'Lato-Italic';
    src: url('./assets/fonts/Lato-Italic.ttf') format('ttf');
  }

  @font-face{
    font-family: 'Lato-Regular';
    src: url('./assets/fonts/Lato-Regular.ttf') format('ttf');
  }

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
    margin: 0;

    display: flex;

    font-family: 'Lato-Regular', sans-serif;
    font-size: 13px;
    text-rendering: optimizeLegibility;

    -moz-osx-font-smoothing: grayscale;  /* Font smoothing tweaks for MacOSx in Gecko */
    -webkit-font-smoothing: antialiased;

    color: #444A59;
    background-color: #f8f8f8;
  }
  #app {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }

  * {
    box-sizing: border-box;
  }

  h1, p, figure {
    margin: 0;
    font-weight: normal;
  }

  a,
  a:hover,
  a:visited{
    text-decoration: none;
    color: #444A59;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  button {
    appearance: none;
    border: 0;
  }

  header,
  footer {
    height: 60px;

    display: flex;
    flex-direction: row;
    align-items: center;

    text-transform: uppercase;
    background-color: #ffffff;
  }

  main {
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
    margin: 30px 0 20px;
  }

  .container {
    width: 100%;
    max-width: 1240px;
    padding: 0 40px;
    margin: 0 auto;
  }



  /* ==========================================================================
   Buttons
   ========================================================================== */

  .icon {
    width: 20px;
    height: 20px;
    fill: #d9d9d9;
    transition: .3s fill;
  }

  .button {
    border: 1px solid #d9d9d9;
    border-radius: 100px;
    background-color: #ffffff;

    cursor: pointer;
    transition: .3s border, .3s color, .3s background-color;
  }

  .button--round {
    display: block;
    border-radius: 50%;
  }

  .button--primary {
    padding: 13px;

    font-family: 'Lato-Bold', sans-serif;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1.39px;
  }

  .button--primary:hover {
    border: 1px solid #444A59;
    color: #ffffff;
    background-color: #444A59;
  }

  .button--wishlist:hover {
    border: 1px solid #444A59;
  }

  .button--wishlist:hover > .icon {
    fill: #444A59;
  }

  .button--in-cart {
    pointer-events: none;
    background-color: #d9d9d9;
  }
  .button--in-wish-list {
    border: 1px solid #757c8b;
    & .icon {
      fill: #757c8b;
    }
  }

</style>
