import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    admin: null,
    products: null,
    users: null,
    token: null,
    error: null,
    singleProduct: null,
    cart: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setAdmin(state, data) {
      state.admin = data;
    },
    setUsers(state, data) {
      state.users = data;
    },
    setToken(state, token) {
      state.token = token;
    },
    setError(state, error) {
      state.error = error;
    },
    setSingleProduct(state, product) {
      state.singleProduct = product;
    },
    addToCart(state, data) {
      state.cart.push(data);
      console.log('Item added to cart:', data); 
    },
    deleteProduct(state, iditems) {
      state.products = state.products.filter(product => product.iditems !== iditems);
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const { data } = await axios.get('https://capstoneproject-wv34.onrender.com/products');
        commit('setProducts', data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async fetchSingleProduct({ commit }, iditems) {
      try {
        const { data } = await axios.get(`https://capstoneproject-wv34.onrender.com/products/${iditems}`);
        commit('setSingleProduct', data);
      } catch (error) {
        console.error('Error fetching single product:', error);
      }
    },
    async fetchUsers({ commit }) {
      try {
        const { data } = await axios.get('https://capstoneproject-wv34.onrender.com/users/');
        commit("setUsers", data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async deleteProduct({ commit }, iditems) {
      try {
        await axios.delete(`https://capstoneproject-wv34.onrender.com/products/${iditems}`);
        commit("deleteProduct", prodID);
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
    async loginUser({ commit }, user) {
      try {
        const response = await axios.post('https://capstoneproject-wv34.onrender.com/login', user, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const { token } = response.data;
        if (!token) {
          throw new Error("Failed to login user.");
        }
        localStorage.setItem("accessToken", token);
        commit("setToken", token);
        return token;
      } catch (error) {
        console.error('Error logging in user:', error);
      }

    },
    
      async fetchUsers({ commit }) {
        try {
          const { data } = await axios.get('https://capstoneproject-wv34.onrender.com/users/');
          commit("setUsers", data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      },
      async deleteUser({ commit }, id) {
        try {
          await axios.delete(`https://capstoneproject-wv34.onrender.com/users/${id}`);
          commit("deleteUser", id);
          Swal.fire({
            icon: 'success',
            title: 'User deleted successfully',
            showConfirmButton: false,
            timer: 1500
          });
        } catch (error) {
          console.error('Error deleting user:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to delete user!',
          });
        }
      },
      async updateUser({ commit }, user) {
        try {
          await axios.patch(`https://capstoneproject-wv34.onrender.com/users/${idusers}`, user);
          commit("updateUser", user);
          Swal.fire({
            icon: 'success',
            title: 'User updated successfully',
            showConfirmButton: false,
            timer: 1500
          });
        } catch (error) {
          console.error('Error updating user:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to update user!',
          });
        }
      },
    addToCart({ commit }, data) {
      commit('addToCart', data);
    },
  }
});
