import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    admin: null,
    products: null,
  },
  getters: {},
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    setAdmin(state, data) {
      state.admin = data;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const { data } = await axios.get('https://capstoneproject-wv34.onrender.com/products');
        commit("setProducts", data);
      } catch (e) {
        console.error(e);
      }
    },
  },
  modules: {},
});
