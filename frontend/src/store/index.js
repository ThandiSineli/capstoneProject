import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    admin: null,
    products: null,
    users: null,
    cart: [],
  },
  getters: {},
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    setAdmin(state, data) {
      state.admin = data;
    },
    setUsers(state, data) {
      state.users = data;
    },
    addToCart(state, data) {
      state.cart.push(data);
      console.log('Item added to cart:', data); 
    },
    deleteProduct(state, prodID) {
      state.products = state.products.filter(product => product.prodID !== prodID);
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const { data } = await axios.get('https://capstoneproject-wv34.onrender.com/products');
        commit("setProducts", data);
      } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
    },
    async fetchUsers({ commit }) {
      try {
        const { data } = await axios.get('https://capstoneproject-wv34.onrender.com/users/');
        commit("setUsers", data);
      } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
      }
    },
    async deleteProduct({ commit }, prodID) {
      try {
        await axios.delete(`https://capstoneproject-wv34.onrender.com/products/${prodID}`);
        commit("deleteProduct", prodID);
      } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
      }
    },
    addToCart({ commit }, data) {
      commit('addToCart', data);
    },
  },

  modules: {},
});
