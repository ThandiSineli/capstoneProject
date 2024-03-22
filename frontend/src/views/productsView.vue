<template>
  <div class="product-container">
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search products...">
    </div>
    <div class="sort-dropdown">
      <div class="dropdown">
        <button class="dropbtn">Categories</button>
        <div class="dropdown-content">
          <button @click="sortByCategory('All')" :class="{ active: selectedCategory === 'All' }">All</button>
          <button @click="sortByCategory('Straight')" :class="{ active: selectedCategory === 'Straight' }">Straight</button>
          <button @click="sortByCategory('Curly')" :class="{ active: selectedCategory === 'Curly' }">Curly</button>
          <!-- Add more category buttons as needed -->
        </div>
      </div>
    </div>
    <div class="product-grid">
      <div v-for="product in filteredProducts" :key="product.prodID" class="product-card">
        <div class="card-body">
          <h5 class="card-title">{{ product.prodName }}</h5>
          <img :src="product.producturl" alt="Product Image" class="card-img-top">
          <div class="buttons">
            <p class="card-text">Price: R{{ product.amount }}</p>
            <p class="card-text">Category: {{ product.category }}</p>
            <router-link :to="{ name:'singleProduct', params: { id: product.iditems } }" class="btn btn-primary">View Details</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: 'All',
      searchQuery: ''
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredProducts() {
      let filtered = this.products;
      if (this.selectedCategory !== 'All') {
        filtered = filtered.filter(product => product.category === this.selectedCategory);
      }
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(product => product.prodName.toLowerCase().includes(query));
      }
      return filtered;
    },
  },
  methods: {
    sortByCategory(category) {
      this.selectedCategory = category;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style scoped>
.product-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.search-bar {
  margin-bottom: 20px;
}

.search-bar input {
  width: 100%;
  padding: 10px;
  border: 1px solid pink;
  border-radius: 5px;
}

.sort-dropdown {
  margin-bottom: 20px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background-color: pink;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  z-index: 1;
  border-radius: 5px;
  overflow: hidden;
}

.dropdown-content button {
  color: black;
  padding: 10px;
  text-decoration: none;
  display: block;
  background-color: pink;
  border: none;
  width: 100%;
  text-align: left;
}

.dropdown-content button:hover {
  background-color: lightpink;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.product-card {
  background-color: white;
  border: 1px solid pink;
  border-radius: 10px;
}

.card-body {
  padding: 15px;
}

.card-title {
  color: black;
  font-size: 18px;
  margin-bottom: 10px;
}

.card-img-top {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.buttons {
  margin-top: 10px;
}

.btn-primary {
  background-color: pink;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
}

.btn-primary:hover {
  background-color: black;
}

@media (min-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
