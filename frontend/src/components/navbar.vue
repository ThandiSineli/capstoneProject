<template>
  <div class="image-section">
    <div class="logo-container">
      <img src="https://cdn-thumbs.imagevenue.com/af/02/9f/ME17RLJE_t.png" alt="Logo" class="logo">
      <h1 class="company-name"><strong style="color: #FF69B4;">Tee's Crown Haven</strong></h1>
    </div>
    <div>
      <p><i>Your New Look Awaits!!</i></p>
    </div>
    <nav class="navbar navbar-light" style="background-color: white;">
      <div class="container-fluid">
        <!-- Left-side links (Home, Shop, Admin, Login) -->
        <div class="d-flex">
          <router-link to="/" class="nav-link">Home</router-link> 
          <router-link to="/Product" class="nav-link">Shop</router-link> 
          <router-link to="/Admin" class="nav-link">Admin</router-link> 
          <router-link to="/login" class="nav-link">Login</router-link>
        </div>
        
        <!-- Middle: Search Form -->
        <form class="d-flex mx-auto">
          <input
            v-model="searchQuery"
            type="search"
            class="form-control rounded me-2"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            style="border-color: #FF69B4; color: #000;"
          />
          <button class="btn btn-outline-secondary" type="submit" id="search-addon" style="border-color: #FF69B4; color: black;">
            <i class="fas fa-search"></i>
          </button>
        </form>

        <!-- Right-side icons (Profile, Wishlist, Cart) -->
        <div class="ms-auto d-flex align-items-center">
          <!-- Replace these URLs with the actual URLs of your hosted icons -->
          <router-link to="/profile" class="nav-link"><img src="https://cdn-thumbs.imagevenue.com/1c/ff/22/ME17RQHY_t.png" alt="Profile" class="icon-img"></router-link>
          <router-link to="/wishlist" class="nav-link"><img src="https://cdn-thumbs.imagevenue.com/a3/d8/93/ME17RQIK_t.png" alt="Wishlist" class="icon-img"></router-link>
          <router-link to="/cart" class="nav-link"><img src="https://cdn-thumbs.imagevenue.com/75/aa/67/ME17RQHP_t.png" alt="Cart" class="icon-img"></router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.navbar {
  padding: 10px 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5); 
 /* backdrop-filter: blur(10px);   */
}

.company-name {
  font-size: 5.5em;
  margin: 0;
  color: #fff; 
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
  background-color: rgba(255, 255, 255, 0.8); 
  color: #000; 
}

.btn-outline-secondary {
  color: #fff; 
}

.btn-outline-secondary:hover {
  color: #FF69B4;
}

.icon-img {
  width: 50px;   
  height: auto;
  margin-right: 5px; 
} 
</style>
