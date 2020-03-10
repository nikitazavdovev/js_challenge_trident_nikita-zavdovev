<template>
  <div @mouseover="open()" @mouseleave="close()">
    <slot></slot>
    <div class="cart" v-show="cartOpen">
      <div
        class="cart__item product"
        v-for="product in cartItems"
        :key="product.uuid"
      >
        <div class="product__image">
          <img
            class="product__image_img"
            :src="product.cover_image_url"
            alt="Product"
            itemprop="image"
          />
        </div>
        <div class="product__content">
          <h2 class="product__title">
            {{ product.title }}
          </h2>
          <span class="product__price">
            {{ currentProductPrice(product) }}
          </span>
        </div>
        <button
          class="product__delete"
          @click.stop="removeFromCart(product.uuid)"
        >
          X
        </button>
      </div>
      <h3 v-if="!cartItems.length" class="cart__empty product">
        Cart is empty
      </h3>
      <div class="cart__total total">
        <h3 class="total__title">cart subtotal:</h3>
        <span class="total__amount">{{ cartPrice | currency("€") }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ShoppingCart",
  data() {
    return {
      cartOpen: false
    };
  },
  computed: {
    ...mapGetters({
      cartPrice: "getTotalCartPrice",
      cartItems: "getCartItems"
    })
  },
  methods: {
    ...mapActions({
      removeFromCart: "removeProductFromCart"
    }),
    currentProductPrice(product) {
      return product.net_price
        ? product.net_price.formatted_value
        : product.retail_price.formatted_value;
    },
    open() {
      this.cartOpen = true;
    },
    close() {
      this.cartOpen = false;
    }
  }
};
</script>

<style scoped lang="scss">
.cart {
  position: absolute;
  top: 100%;
  right: 0;
  width: 320px;
  min-height: 40px;
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.75);
  border: 1px solid rgba(149, 149, 149, 0.15);
  background: #fff;
  z-index: 999;
  padding-bottom: 20px;
  transition: 5s all;
  &__item {
    padding: 20px;
    &:nth-of-type(even) {
      background: #fbfbfb;
    }
  }
  &__total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  &__empty {
    padding: 0 20px 20px;
  }
}
.product {
  display: flex;
  border-bottom: 1px solid rgba(149, 149, 149, 0.15);
  &__content {
    flex-grow: 1;
  }
  &__image {
    margin-right: 10px;
    &_img {
      width: 60px;
      height: 60px;
    }
  }
  &__title {
    font-size: 12px;
    font-weight: 400;
    margin: 0 0 10px 0;
  }
  &__price {
    color: #bebebe;
  }
  &__delete {
    min-height: 20px;
    height: 20px;
    min-width: 20px;
    border-radius: 50%;
    padding: 0;
    font-size: 12px;
    margin-left: 5px;
    cursor: pointer;
    color: #fff;
    &:hover {
      background: #979797;
    }
  }
}
.total {
  position: relative;
  &__title {
    color: #ababab;
    margin: 0;
  }
  &__amount {
    font-weight: 700;
    color: #505050;
  }
  &:after {
    position: absolute;
    display: block;
    top: 100%;
    content: "";
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
    background: radial-gradient(circle at center, #505050, transparent 61%)
      bottom left/3px 1px repeat-x;
  }
}
</style>
