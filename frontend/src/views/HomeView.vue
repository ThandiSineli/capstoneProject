<template>
  <div>
    <!-- Welcome Section with Background Image -->
    <section class="welcome-section" :style="{ backgroundImage: 'url(https://i.pinimg.com/originals/19/15/90/191590ca3499087820152f91cb805b28.jpg)' }">
      <div class="welcome-content">
        <h1>Welcome to Our Store!</h1>
        <p>We have everything you need for a magical shopping experience.</p>
        <router-link to="/signup" class="signup-link">Sign Up Now</router-link>
      </div>
    </section>
   

    <!-- Bestsellers Section -->
    <section class="bestsellers-section">
      <h2 class="mb-4">Bestsellers</h2>
      <div class="product-grid">
        <div v-for="product in bestsellers.slice(0, 3)" :key="product.prodID" class="product-card">
          <router-link :to="{ name: 'product', params: { id: product.prodID } }" class="card-link">
            <div class="card">
              <img :src="product.producturl" alt="Product Image" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ product.prodName }}</h5>
                <p class="card-text">Price: R{{ product.amount }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
     </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  computed: {
    bestsellers() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style scoped>
.welcome-section {
  padding: 100px 0;
  text-align: center;
  color: white;
}

.welcome-section .welcome-content {
  max-width: 800px;
  margin: 0 auto;
}

.bestsellers-section {
  padding: 50px 0;
}

.carousel-section {
  padding: 50px 0;
}

.carousel-item img {
  height: 400px;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-card {
  width: 250px;
  margin: 0 15px;
}

.card {
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover; /* Ensure the image covers the entire space */
}

.card-body {
  padding: 15px;
}

.card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.card-text {
  margin-bottom: 0;
}

.signup-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #FF69B4;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.signup-link:hover {
  background-color: #D84492;
}
</style>
