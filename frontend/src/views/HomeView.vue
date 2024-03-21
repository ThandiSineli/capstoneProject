<template>
   <div>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://i.ibb.co/1nDcFX4/Photoroom-20240317-084805.jpg" class="d-block w-100" alt="Slide 1">
        </div>
        <div class="carousel-item">
          <img src="https://i.pinimg.com/564x/82/c4/00/82c400d5be4fc129be4b92141472addd.jpg" class="d-block w-100" alt="Slide 2">
        </div>
        <div class="carousel-item">
          <img src="https://i.pinimg.com/564x/cd/46/43/cd4643dfb0e94cab511c8551f463a6fa.jpg" class="d-block w-100" alt="Slide 3">
        </div>
       <div class="carousel-item">
          <img src="https://i.pinimg.com/originals/f3/a5/06/f3a506b6312e4f2363297d1988f319b4.jpg" class="d-block w-100" alt="Slide 3">
        </div>
        <div class="carousel-item">
          <img src="https://i.pinimg.com/originals/0c/da/41/0cda4161378319518c9550ccc41eac34.jpg" class="d-block w-100" alt="Slide 3">
        </div>
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


    <!-- Bestsellers-->
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
  width: 90%; 
  margin: auto; 
}

.carousel-inner {
  height: 500px; 
}

.carousel-item img {
  width: 100%;
  height: 600px;
 
}

.product-grid {
  display: flex;
}

.product-card {
  width: 1000%;
  
}

.card {
  width: 50%;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card-img-top {
  width: 100%;
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
