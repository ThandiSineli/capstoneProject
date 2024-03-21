<template>
  <div class="product-grid">
    <div v-for="product in products" :key="product.iditems" class="product-card">
      <div class="card-body">
        <h5 class="card-title">{{ product.prodName }}</h5>
        <img :src="product.producturl" alt="Product Image" class="card-img-top">
        <div class="buttons">
          <p class="card-text">Price: R{{ product.amount }}</p>
          <!-- Use router-link for navigation -->
          <router-link :to="{ name: 'singleview', params: { id: product.ProdID } }" class="btn btn-primary">View Details</router-link>
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
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>


<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 0px;
}

.product-card {
  border: 1px solid #ccc;
  padding: 20px;
  width: 80%;
}

.product-card img {
  margin-top: 1px;
  max-height: 1000px; 
  max-width: 4000px;
  object-fit: cover;
}

.buttons {
  margin-top: 10px;
}

.buttons button {
  margin-right: 10px;
}
</style>
