<template>
  <article class="product" itemscope itemtype="http://schema.org/Product">
    <figure class="product__image-wrapper">
      <div class="product__image" ref="productImage">
        <img class="product__image-item"
             :src="getProductImage()"
             alt="Product"
             itemprop="image"/>
      </div>
      <button
        class="product__wishlist-button button button--round button--wishlist"
        :class="{ 'button--in-wish-list': inWishList }"
        @click="wishListHandler()"
      >
        <svg
          class="icon"
          width="20px"
          height="20px"
          viewBox="0 6 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>Wishlist Icon</title>
          <polygon
            id="Wishlist-Icon"
            stroke="none"
            fill-rule="evenodd"
            points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"
          ></polygon>
        </svg>
      </button>
    </figure>
    <div class="product__details">
      <h1 class="product__title" itemprop="brand">
        {{ product.title }}
      </h1>
      <p class="product__subtitle" itemprop="description">
        {{ product.description }}
      </p>
      <div class="product__price" itemscope itemtype="http://schema.org/Offer">
        <span
          class="product__price"
          itemprop="price"
          :class="{ 'product__price--strike': product.discount }"
        >
          {{ product.retail_price.formatted_value }}
        </span>

        <span
          class="product__price--discounted"
          itemprop="price"
          v-if="product.discount"
        >
          {{ product.net_price.formatted_value }}
        </span>
      </div>

      <button
        class="product__add-to-cart button button--primary"
        :class="{ 'button--in-cart': inCart }"
        @click="addToCart(product)"
      >
        {{ inCart ? "In Cart" : "Add to Cart" }}
      </button>
    </div>
  </article>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Product",
  props: {
    product: Object
  },
  data() {
    return {
      imageWidth: '',
    }
  },
  methods: {
    ...mapActions({
      addToCart: "addProductToCart",
      addToWishList: "addProductToWishList",
      removeFromWishList: "removeProductFromWishList"
    }),
    wishListHandler() {
      if (this.inWishList) {
        this.removeFromWishList(this.product.uuid);
      } else {
        this.addToWishList(this.product);
      }
    },
    getProductImage() {
      return `${this.product.cover_image_url}?q=60&fit=crop&w=${this.imageWidth}&h=${this.imageHeight}`
    }
  },
  computed: {
    inCart() {
      return this.$store.state.cart.filter(
        item => item.uuid === this.product.uuid
      ).length;
    },
    inWishList() {
      return this.$store.state.wishList.filter(
        item => item.uuid === this.product.uuid
      ).length;
    },
    imageHeight() {
      return this.imageWidth*2/3;
    }
  },
  mounted() {
    this.imageWidth = this.$refs.productImage.clientWidth;
  }
};
</script>

<style scoped lang="scss">
.product {
  display: flex;
  flex-direction: column;
  height: 100%;

  background-color: #ffffff;
  &__image-wrapper {
    padding: 20px;
    position: relative;
    text-align: center;
  }
  &__image {
    max-width: 100%;
    height: auto;
    min-height: 150px;
    @media (min-width: 768px) {
    }
    @media (min-width: 1200px) {
    }
  }
  &__image-item {
    width: 100%;
    height: 100%;
  }
  &__details {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    padding: 10px 20px 20px;
    text-align: center;
  }
  &__title {
    padding-bottom: 10px;

    font-family: "Lato-Bold", sans-serif;
    font-size: 14px;
    letter-spacing: 1.37px;
    text-transform: uppercase;
  }
  &__subtitle {
    padding-bottom: 10px;

    flex-grow: 1;

    font-size: 12px;
    line-height: 19px;
    letter-spacing: 0.43px;

    color: #808080;
  }
  &__price {
    padding-bottom: 20px;

    font-family: "Lato-Bold", sans-serif;
    font-size: 14px;
    letter-spacing: 2.33px;
    &--strike {
      margin-right: 10px;
      text-decoration: line-through;
    }
    &--discounted {
      color: #f54b5e;
    }
  }
  &__wishlist-button {
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 10px;
    right: 10px;
  }
  &__add-to-cart {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
