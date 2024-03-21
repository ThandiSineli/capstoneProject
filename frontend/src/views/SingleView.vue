<template>
    <div class="product-details">
      <h2>{{ product ? product.prodName : 'Product Not Found' }}</h2>
      <img v-if="product" :src="product.producturl" alt="Product Image">
      <p v-if="product">Price: R{{ product.amount }}</p>
      <p v-if="product">Quantity: {{ product.quantity }}</p>
      <button v-if="product" @click="addToCart">Add to Cart</button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      product() {
        return this.$store.state.products.find(product => product.prodID === this.$route.params.iditems);
      },
    },
    methods: {
      addToCart() {
        // Simulate adding the product to the cart (replace with actual implementation)
        const productToAdd = this.product;
        if (productToAdd) {
          this.$store.dispatch('addToCart', productToAdd);
          alert('Product added to cart successfully!');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  