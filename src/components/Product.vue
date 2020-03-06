<template>
  <article class="product" itemscope itemtype="http://schema.org/Product">
    <figure class="product__image-wrapper">
      <img class="product__image"
           :src="product.cover_image_url"
           alt="Product"
           itemprop="image"/>
      <button class="product__wishlist-button button button--round button--wishlist"
              :class="{'button--in-wish-list': inWishList}"
              @click="wishListHandler()">
        <svg class="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>Wishlist Icon</title>
          <polygon id="Wishlist-Icon" stroke="none" fill-rule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
        </svg>
      </button>
    </figure>
    <div class="product__details">
      <h1 class="product__title" itemprop="brand">
        {{product.title}}
      </h1>
      <p class="product__subtitle" itemprop="description">
        {{product.description}}
      </p>
      <div class="product__price" itemscope itemtype="http://schema.org/Offer">
        <span class="product__price"
              itemprop="price"
              :class="{'product__price--strike':product.discount}">
          {{product.retail_price.formatted_value}}
        </span>

        <span class="product__price--discounted" itemprop="price" v-if="product.discount">
          {{product.net_price.formatted_value}}
        </span>
      </div>

      <button class="product__add-to-cart button button--primary"
              :class="{'button--in-cart': inCart}"
              @click="addToCart(product)">
        {{inCart ? 'In Cart' : 'Add to Cart'}}
      </button>
    </div>
  </article>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: "Product",
    props: {
      product: Object
    },
    methods: {
      ...mapActions({
        addToCart: 'addProductToCart',
        addToWishList: 'addProductToWishList',
        removeFromWishList: 'removeProductFromWishList',
      }),
      wishListHandler() {
        if(this.inWishList) {
          this.removeFromWishList(this.product.uuid);
        } else {
          this.addToWishList(this.product);
        }
      }
    },
    computed: {
      inCart() {
        return this.$store.state.cart.filter(item => item.uuid === this.product.uuid).length;
      },
      inWishList() {
        return this.$store.state.wishList.filter(item => item.uuid === this.product.uuid).length;
      }
    }
  }
</script>

<style scoped lang="scss">
  /* ==========================================================================
   Product
   ========================================================================== */

  .product {
    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: #ffffff;
  }

  /* ==========================================================================
     Product Image
     ========================================================================== */

  .product__image-wrapper {
    padding: 20px;
    position: relative;
    text-align: center;
  }

  .product__image {
    max-width: 100%;
    height: auto;
  }

  /* ==========================================================================
     Product Details
     ========================================================================== */

  .product__details {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    padding: 10px 20px 20px;
    text-align: center;
  }

  /* ==========================================================================
     Product Titles
     ========================================================================== */

  .product__title {
    padding-bottom: 10px;

    font-family: 'Lato-Bold', sans-serif;
    font-size: 14px;
    letter-spacing: 1.37px;
    text-transform: uppercase;
  }

  .product__subtitle {
    padding-bottom: 10px;

    flex-grow: 1;

    font-size: 12px;
    line-height: 19px;
    letter-spacing: 0.43px;

    color: #808080;
  }

  /* ==========================================================================
     Product Prices
     ========================================================================== */

  .product__price {
    padding-bottom: 20px;

    font-family: 'Lato-Bold', sans-serif;
    font-size: 14px;
    letter-spacing: 2.33px;
  }

  .product__price--strike {
    margin-right: 10px;
    text-decoration: line-through;
  }

  .product__price--discounted {
    color: #F54B5E;
  }

  /* ==========================================================================
     Product actions
     ========================================================================== */

  .product__wishlist-button {
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 10px;
    right: 10px;
  }

  .product__add-to-cart {
    width: 100%;
    margin-top: 10px;
  }

</style>