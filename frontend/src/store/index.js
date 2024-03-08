import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    Admin: null,
    products: null,
  },
  getters: {},
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    setAdmin(state, data){
      state.products = data
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const { data } = await axios.get('https://capstoneproject-wv34.onrender.com/products');
        console.log(data); 
       
          commit("setProducts", data); 
        
      } catch (e) {
        console.error(e);
      }
    },
  },
  modules: {},
});