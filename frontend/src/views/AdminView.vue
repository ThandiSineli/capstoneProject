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
        <tr v-for="(product, index) in products" :key="product.id" :class="{ 'zebra-stripe': index % 2 === 0 }">
          <td>{{ index + 1 }}</td>
          <td><h2>{{ product.prodName }}</h2></td>
          <td><p>Quantity: {{ product.quantity }}</p></td>
          <td><p>Price: {{ product.amount }}</p></td>
          <td><p>Category: {{ product.category }}</p></td>
          <td><img :src="product.producturl" alt="Product Image" class="product-image"></td>
          <td>
            <button class="edit-btn" @click="editProduct(product)">Edit</button>
            <button class="delete-btn" @click="deleteProduct(product._id)">Delete</button>
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
      // You can implement edit functionality here, like opening a modal or navigating to an edit page
      console.log("Editing product:", product);
    },
    async deleteProduct(prodID) {
      try {
        await axios.delete(`http://localhost:3000/products/${prodID}`);
        // If successful, update the products list in the store without reloading the page
        this.$store.dispatch('fetchProducts');
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
  },
};
</script>

<style>
.zebra-stripe {
  background-color: #ff69b4; 
}

.product-table {
  width: 100%;
  border-collapse: collapse;
  color: #645e5e; 
}

.product-table th,
.product-table td {
  padding: 12px;
  text-align: left;
  border: 1px solid #000; /* Black border */
}

.product-table th {
  background-color: #000; 
}

.product-table .product-image {
  max-width: 50px;
  height: auto;
  border: 2px solid #fff; 
}

.edit-btn,
.delete-btn {
  padding: 8px 12px;
  margin-right: 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.edit-btn {
  background-color: #ff69b4; /* Pink background */
  color: #000; /* Black text color */
}

.delete-btn {
  background-color: #000; /* Black background */
  color: #ff69b4; /* Pink text color */
}

.edit-btn:hover,
.delete-btn:hover {
  background-color: #d3d61f; /* Yellow on hover */
}
</style>
