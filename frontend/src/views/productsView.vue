<template>
  <div class="product-grid">
    <div v-for="product in products" :key="product.prodID" class="product-card">
      <div class="card-body">
        <h5 class="card-title">{{ product.prodName }}</h5>
        <p class="card-text">Quantity: {{ product.quantity }}</p>
        <p class="card-text">Price: R{{ product.amount }}</p>
        <p class="card-text">Category: {{ product.category }}</p>
        <img :src="product.producturl" alt="Product Image" class="card-img-top" style="max-width: 100%; height: 200px; object-fit: cover;">
        <div class="buttons">
         <button @click="addToCart(data)" class="btn btn-primary">Add to Cart</button> 
          <button @click="addToWishlist(product)" class="btn btn-secondary">Add to Wishlist</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    cartItems() {
    return this.$store.state.cart; 
  },

  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    addToCart(data) {
    this.$store.dispatch('addToCart', data);
    console.log('Adding to Cart:', data); 
  },
    addToWishlist(product) {
      console.log('Adding to Wishlist:', product);
      // Implement the logic to add the current product to the wishlist
      // You can use Vuex or emit an event to notify the parent component
    },
  },
};
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 0px;
}

.product-card {
  border: 1px solid #ccc;
  padding: 20px;
  width: 80%;
}

.product-card img {
  margin-top: 1px;
  max-height: 400px; 
  max-width: 400px;
  object-fit: cover;
}

.buttons {
  margin-top: 10px;
}

.buttons button {
  margin-right: 10px;
}
</style>
