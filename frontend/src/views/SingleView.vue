<template>
  <div class="product-details">
    <div class="product-info">
      <h2>{{ product ? product.prodName : 'Product Not Found' }}</h2>
      <img v-if="product" :src="product.producturl" alt="Product Image">
      <p v-if="product">Price: R{{ product.amount }}</p>
      <p v-if="product">Quantity: {{ product.quantity }}</p>
    </div>
    <div class="description" v-if="product">
      <p>Description: {{ product.description }}</p>
    </div>
    <button v-if="product" @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.state.products.find(product => product.prodID === this.$route.params.id);
    },
  },
  methods: {
    addToCart() {
      if (this.product) {
        this.$store.dispatch('addToCart', this.product);
        alert('Product added to cart successfully!');
      }
    }
  },
};
</script>

<style scoped>
.product-details {
  background-color: #d4cace; 
  padding: 20px;
  border-radius: 10px;
 
  flex-wrap: wrap;
  justify-content: center;
}

.product-info {
  margin-right: 20px;
}

img {
  max-width: 50%;
  height: auto;
  border-radius: 16px;
}

.description {
  text-align: center;
}

button {
  background-color: pink;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #ff80ab; 
}
</style>
