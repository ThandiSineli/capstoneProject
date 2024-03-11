<template>
  <div class="image-section">
    <div class="logo-container">
      <img src="https://cdn-thumbs.imagevenue.com/af/02/9f/ME17RLJE_t.png" alt="Logo" class="logo">
      <h1 class="company-name"><strong style="color: #FF69B4;">Tee's Crown Haven</strong></h1>
    </div>
    <div>
      <p><i>Nghk ghjk!</i></p>
    </div>
    <nav class="navbar navbar-light" style="background-color: white;">
      <div class="container-fluid">
        <router-link to="/" class="nav-link">Home</router-link> 
        <router-link to="/Product" class="nav-link">Shop</router-link> 
        <router-link to="/Admin" class="nav-link">Admin</router-link> 
   <form class="d-flex ms-auto">
          <input
            v-model="searchQuery"
            type="search"
            class="form-control rounded me-2"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            style="border-color: #FF69B4; color: #000;"
          />
          <button class="btn btn-outline-secondary" type="submit" id="search-addon" style="border-color: #FF69B4; color: #000;">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>

<style>
.navbar {
  padding: 10px 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with 50% opacity */
  backdrop-filter: blur(10px); /* Add a backdrop filter for a frosted glass effect */
}

.company-name {
  font-size: 5.5em;
  margin: 0;
  color: #fff; /* Set the text color to white */
}

.nav-link {
  margin: 0 10px;
  color: #0e0e0e; /* Set the text color to white */
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #FF69B4;
}

.form-control {
  background-color: rgba(255, 255, 255, 0.8); /* White background with 80% opacity for the search input */
  color: #000; /* Set the text color to black */
}

.btn-outline-secondary {
  color: #fff; /* Set the text color to white */
}

.btn-outline-secondary:hover {
  color: #FF69B4;
}
</style>
