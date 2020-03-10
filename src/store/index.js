import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    wishList: []
  },
  mutations: {
    pushProductToCart(state, item) {
      state.cart.push(item);
    },
    deleteProductFromCart(state, id) {
      const index = state.cart.findIndex(item => item.uuid === id);
      state.cart.splice(index, 1);
    },

    pushProductToWishList(state, item) {
      state.wishList.push(item);
    },
    deleteProductFromWishList(state, id) {
      const index = state.wishList.findIndex(item => item.uuid === id);
      state.wishList.splice(index, 1);
    }
  },
  actions: {
    addProductToCart({ state, commit }, item) {
      if (!state.cart.includes(item)) {
        commit("pushProductToCart", item);
      }
    },
    removeProductFromCart({ commit }, id) {
      commit("deleteProductFromCart", id);
    },

    addProductToWishList({ state, commit }, item) {
      if (!state.wishList.includes(item)) {
        commit("pushProductToWishList", item);
      }
    },
    removeProductFromWishList({ commit }, id) {
      commit("deleteProductFromWishList", id);
    }
  },
  getters: {
    getTotalCartPrice(state) {
      if (state.cart.length <= 0) return 0;

      return state.cart.reduce((sum, item) => {
        return +sum + +item.retail_price.value;
      }, 0);
    },
    getCartItems(state) {
      return state.cart;
    },
    getWishListItems(state) {
      return state.wishList;
    }
  },
  modules: {}
});
