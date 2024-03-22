<template>
  <div class="navbar-container">
    <nav class="navbar navbar-light" style="background-color: white;">
      <div class="container-fluid">
        <div class="logo-container">
          <img src="https://cdn-thumbs.imagevenue.com/af/02/9f/ME17RLJE_t.png" alt="Logo" class="logo">
          <div class="brand">
            <h1 class="company-name"><strong style="color: #FF69B4;">Tee's Crown Haven</strong></h1>
            <p class="slogan"><i>Your New Look Awaits.</i></p>
          </div>
        </div>
        <div class="ms-auto d-flex align-items-center">
          <router-link to="/" class="nav-link">Home</router-link> 
          <router-link to="/Product" class="nav-link">Shop</router-link> 
          <router-link to="/Admin" class="nav-link">Admin</router-link> 
          <router-link to="/login" class="nav-link"><img src="https://cdn-thumbs.imagevenue.com/1c/ff/22/ME17RQHY_t.png" alt="Profile" class="icon-img"></router-link>
          <router-link to="/wishlist" class="nav-link"><img src="https://cdn-thumbs.imagevenue.com/a3/d8/93/ME17RQIK_t.png" alt="Wishlist" class="icon-img"></router-link>
          <router-link to="/cart" class="nav-link"><img src="https://cdn-thumbs.imagevenue.com/75/aa/67/ME17RQHP_t.png" alt="Cart" class="icon-img"></router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  padding: 10px 0;
}

.logo-container {
  display: flex;
  justify-content: flex-start; /* Align content to the left */
  align-items: center; /* Center vertically */
  flex-direction: row; /* Arrange elements horizontally */
}

.logo {
  width: 85px; /* Adjust logo size */
  height: auto;
  margin-right: 10px; /* Add some space between logo and text */
}

.brand {
  text-align: center; /* Center the company name and slogan */
}

.company-name {
  font-size: 2.5em; /* Adjust the font size as needed */
  margin: 0;
  color: #FF69B4; /* Pink color for the company name */
}

.slogan {
  font-size: 1em; /* Adjust the font size as needed */
  margin: 5px 0 0; /* Add some space between the company name and slogan */
}

.nav-link {
  margin: 0 10px;
  color: #0e0e0e; /* Dark color for the nav links */
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #FF69B4; /* Pink color on hover */
}

.icon-img {
  width: 30px; /* Adjust icon size as needed */
  height: auto;
  margin-right: 5px; /* Add some spacing between icons */
}
</style>
