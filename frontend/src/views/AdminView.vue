<template>
  <div>
    <h1 class="section-title">Manage Products</h1>
    <table class="admin-table">
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
            <input v-else type="text" v-model="product.editedName" class="input-field">
          </td>
          <td>
            <template v-if="!product.editing">{{ product.quantity }}</template>
            <input v-else type="number" v-model.number="product.editedQuantity" class="input-field">
          </td>
          <td>
            <template v-if="!product.editing">R{{ product.amount }}</template>
            <input v-else type="number" v-model.number="product.editedAmount" class="input-field">
          </td>
          <td>
            <template v-if="!product.editing">{{ product.producturl }}</template>
            <input v-else type="text" v-model="product.editedImage" class="input-field">
          </td>
          <td>
            <template v-if="!product.editing">{{ product.category }}</template>
            <input v-else type="text" v-model="product.editedCategory" class="input-field">
          </td>
          <td>
            <button v-if="!product.editing" @click="toggleEditMode(product)" class="action-button edit">Edit</button>
            <button v-else @click="saveChanges(product)" class="action-button save">Save</button>
            <button @click="confirmDelete(product.iditems)" class="action-button delete">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 class="section-title">Manage Users</h2>
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
      product.editing = !product.editing;
      product.editedName = product.prodName;
      product.editedQuantity = product.quantity;
      product.editedAmount = product.amount;
      product.editedImage = product.producturl;
      product.editedCategory = product.category;
    },
    async saveChanges(product) {
      try {
        await axios.put(`https://capstoneproject-wv34.onrender.com/products/${product.iditems}`, {
          prodName: product.editedName,
          quantity: product.editedQuantity,
          amount: product.editedAmount,
          category: product.editedCategory
        });
        product.prodName = product.editedName;
        product.quantity = product.editedQuantity;
        product.amount = product.editedAmount;
        product.category = product.editedCategory;
        product.editing = false;
        Swal.fire({
          icon: 'success',
          title: 'Product updated successfully',
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.error('Error saving changes:', error);
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
.section-title {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.admin-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.admin-table th,
.admin-table td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd; /* Light gray border */
}

.admin-table th {
  background-color: #FF69B4; /* Pink background */
  color: #FFF; /* White text color */
}

.admin-table td {
  background-color: #fff; /* White background */
}

.zebra-stripe {
  background-color: #f9f9f9; /* Light gray background for even rows */
}

.action-button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 4px;
}

.action-button.edit {
  background-color: #FF69B4; /* Pink background */
  color: #FFF; /* White text color */
}

.action-button.save {
  background-color: #009688; /* Green background */
  color: #FFF; /* White text color */
}

.action-button.delete {
  background-color: #000; /* Black background */
  color: #FFF; /* White text color */
}

.action-button:hover {
  opacity: 0.8;
}

.input-field {
  width: 100%;
  padding: 6px 10px;
  box-sizing: border-box;
}

/* Media queries for responsiveness */
@media screen and (max-width: 700px) {
  .admin-table th,
  .admin-table td {
    padding: 10px;
  }
}

@media screen and (max-width: 576px) {
  .admin-table th,
  .admin-table td {
    padding: 8px;
    font-size: 14px;
  }
}
</style>
