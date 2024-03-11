<template>
   <div>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://cdn-thumbs.imagevenue.com/f0/91/a9/ME17RKT1_t.jpg" class="d-block w-100" alt="Slide 1">
        </div>
        <div class="carousel-item">
          <img src="https://cdn-thumbs.imagevenue.com/31/77/4c/ME17RL5L_t.png" class="d-block w-100" alt="Slide 2">
        </div>
        <div class="carousel-item">
          <img src="https://cdn-thumbs.imagevenue.com/71/f6/ac/ME17RLB5_t.jpg" class="d-block w-100" alt="Slide 3">
        </div>
        <!-- Add more slides as needed -->
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


    <!-- Bestsellers Section -->
    <div class="homepage">
      <h2 class="mb-4">Bestsellers</h2>
      <div class="product-grid">
        <div v-for="product in bestsellers.slice(0, 3)" :key="product.prodID" class="product-card">
          <router-link :to="{ name: 'product', params: { id: product.prodID } }" class="card-link">
            <div class="card">
              <img :src="product.producturl" alt="Product Image" class="card-img-top">
              <div class="card-body">
              

              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselSlides: [
        { image: 'https://cdn-thumbs.imagevenue.com/47/57/c9/ME17QP8X_t.png', alt: 'Slide 1' },
        // Add more slides as needed
      ],
    };
  },
  computed: {
    bestsellers() {
      console.log('Bestsellers computed:', this.$store.state.products);
      return this.$store.state.products;
    },
  },
  mounted() {
    console.log('Component mounted');
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style scoped>
#myCarousel {
  width: 70%; 
  margin: auto; 
}

.carousel-inner {
  height: 400px; 
}

.carousel-item img {
  width: 100%;
  height: 100%;
 
}

.product-grid {
  display: flex;
}

.product-card {
  width: 50%;
}

.card {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card-img-top {
  width: 50%;
  height: auto;
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
</style>
