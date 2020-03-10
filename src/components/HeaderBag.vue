<template>
  <aside class="header-bag">
    <ShoppingCart class="header-bag__item header-bag__count">
      <div class="header-bag__price">
        {{ cartPrice | currency("€") }}
      </div>
      <svg
        class="icon"
        width="17px"
        height="18px"
        viewBox="36 8 17 18"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>Bag Icon</title>
        <path
          d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z"
          id="Bag-Icon"
          stroke="none"
          fill-rule="evenodd"
        ></path>
      </svg>
      <span class="bag__item-counter">{{ cartItems.length }}</span>
    </ShoppingCart>
    <div class="header-bag__item header-bag__wishlist-count">
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
      <span class="bag__item-counter">{{ wishListItems.length }}</span>
    </div>
  </aside>
</template>
<script>
import { mapGetters } from "vuex";
import ShoppingCart from "./ShoppingCart";

export default {
  name: "HeaderBag",
  components: {
    ShoppingCart
  },
  computed: {
    ...mapGetters({
      cartPrice: "getTotalCartPrice",
      cartItems: "getCartItems",
      wishListItems: "getWishListItems"
    })
  }
};
</script>
<style scoped lang="scss">
.header-bag {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  &__item {
    height: 100%;

    display: flex;
    align-items: center;
    .icon {
      height: auto;
      fill: #444a59;
    }
  }
  &__price {
    margin-right: 5px;
    font-size: 12px;
    line-height: 12px;
  }
  &__count {
    margin-left: 10px;
    cursor: pointer;
    .icon {
      width: 17px;
    }
  }
  &__wishlist-count {
    margin-left: 10px;
  }
}
.bag__item-counter {
  width: 13px;
  height: 13px;
  margin-left: -1px;

  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  font-family: "Lato-Bold", sans-serif;
  font-size: 8px;
  text-align: center;

  border-radius: 50%;
  color: #ffffff;
  background-color: #358ed7;
}
</style>
