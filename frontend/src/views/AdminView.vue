<template>
  <div>
    <h>Products</h>
    <table class="product-table">
      
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Image</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.iditems" :class="{ 'zebra-stripe': index % 2 === 0 }">
          <td>{{ index + 1 }}</td>
          <td>
            <template v-if="!product.editing">{{ product.prodName }}</template>
            <input v-else type="text" v-model="product.editedName">
          </td>
          <td>
            <template v-if="!product.editing">{{ product.quantity }}</template>
            <input v-else type="number" v-model.number="product.editedQuantity">
          </td>
          <td>
            <template v-if="!product.editing">R{{ product.amount }}</template>
            <input v-else type="number" v-model.number="product.editedAmount">
          </td>
          <td>
            <template v-if="!product.editing">{{ product.producturl }}</template>
            <input v-else type="text" v-model="product.editedImage">
          </td>
          <td>
            <template v-if="!product.editing">{{ product.category }}</template>
            <input v-else type="text" v-model="product.editedCategory">
          </td>
          <td>
            <button v-if="!product.editing" @click="toggleEditMode(product)">Edit</button>
            <button v-else @click="saveChanges(product)">Save</button>
            <button @click="confirmDelete(product.iditems)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h>Users</h>
    <user-view />
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import UserView from './userView.vue';

export default {
  components: {
    UserView,
  },
 data() {
    return {
      products: []
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const { data } = await axios.get('https://capstoneproject-wv34.onrender.com/products');
        this.products = data.map(product => ({ ...product, editing: false }));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    toggleEditMode(product) {
      // Toggle editing mode for the clicked product
      product.editing = !product.editing;
      // Initialize edited properties with current values
      product.editedName = product.prodName;
      product.editedQuantity = product.quantity;
      product.editedAmount = product.amount;
      product.editedImage = product.producturl;
      product.editedCategory = product.category;
    },
    async saveChanges(product) {
      try {
        // Send PUT request to update the product
        await axios.put(`https://capstoneproject-wv34.onrender.com/products/${product.iditems}`, {
          prodName: product.editedName,
          quantity: product.editedQuantity,
          amount: product.editedAmount,
          category: product.editedCategory
        });
        // Update product data in the table
        product.prodName = product.editedName;
        product.quantity = product.editedQuantity;
        product.amount = product.editedAmount;
        product.category = product.editedCategory;
        // Exit editing mode
        product.editing = false;
        // Show success message
        Swal.fire({
          icon: 'success',
          title: 'Product updated successfully',
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.error('Error saving changes:', error);
        // Show error message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to update product!',
        });
      }
    },
    async confirmDelete(iditems) {
      try {
        await axios.delete(`https://capstoneproject-wv34.onrender.com/products/${iditems}`);
        await this.fetchProducts();
        Swal.fire({
          icon: 'success',
          title: 'Product deleted successfully',
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.error('Error deleting product:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to delete product!',
        });
      }
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>

<style scoped>
/* Your styles */
.product-table {
  width: 100%;
  border-collapse: collapse;
}

.product-table th,
.product-table td {
  border: 1px solid #000;
  padding: 8px;
  color: #dd286d;
}

.product-table th {
  background-color: #000;
  text-align: left;
}

.product-table tr:nth-child(even) {
  background-color: #000;
}

.product-table tr:hover {
  background-color: #333;
}

.product-table input[type="text"],
.product-table input[type="number"] {
  width: 100%;
  padding: 6px 10px;
  box-sizing: border-box;
}

button {
  background-color: #FF69B4;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 4px;
}

button:hover {
  background-color: #D84492;
}
</style>
