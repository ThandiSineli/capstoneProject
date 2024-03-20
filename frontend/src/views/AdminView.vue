<template>
  <div>
    <table class="product-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.prodID" :class="{ 'zebra-stripe': index % 2 === 0 }">
          <td>{{ index + 1 }}</td>
          <td><h2>{{ product.prodName }}</h2></td>
          <td><p> {{ product.quantity }}</p></td>
          <td><p> R{{ product.amount }}</p></td>
          <td><p> {{ product.category }}</p></td>
          <td><img :src="product.producturl" alt="Product Image" class="product-image"></td>
          <td>
            <button class="edit-btn" @click="editProduct(product)">Edit</button>
            <button class="delete-btn" @click="deleteProduct(product.prodID)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    async editProduct(product) {
      
      this.$router.push({ name: 'editproduct', params: { id: product.prodID } });
    },
    async deleteProduct(productId) {
      try {
        await axios.delete(`https://capstoneproject-wv34.onrender.com/products/${productId}`);
        await this.fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
    async fetchProducts() {
      try {
        const { data } = await axios.get('https://capstoneproject-wv34.onrender.com/products');
        this.$store.commit('setProducts', data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
  mounted() {
   
    this.fetchProducts();
  },
};
</script>

<style>

</style>

