<template>
  <div>
    <footer class="bg-pink text-white p-4 text-center">

      <div class="container">
        <section>
          <form action="">
            <div class="row d-flex justify-content-center">
              <div class="col-auto">
                <p class="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div class="col-md-5 col-12">
                <!-- Email input -->
                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="email" id="form5Example24" class="form-control" />
                  <label class="form-label" for="form5Example24">Email address</label>
                </div>
              </div>
     
              <div class="col-auto">
                <!-- Submit button -->
                <button data-mdb-ripple-init type="submit" class="btn btn-outline mb-4">
                  Subscribe
                </button>
              </div>
            </div>
         
          </form>
        </section>

       
     
       
              
       
           <section class="mb-6">

    <a href="#" role="button" class="icon-button">
      <img src="https://cdn-thumbs.imagevenue.com/31/d2/7d/ME17RPTL_t.png" alt="Instagram" />
    </a>   

    <a href="" role="button" class="icon-button">
      <img src="https://cdn-thumbs.imagevenue.com/84/c6/72/ME17RPJV_t.png" alt="Facebook" />
    </a>
  </section>
       
        <section class="mb-4">
        
          <div class="row">
           
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <router-link class="text-body" to="/about">About Us</router-link>
                </li>
                <li>
                  <router-link class="text-body" to="/signup">Sign Up</router-link>
                </li>
                <li>
                  <router-link class="text-body" to="/policy-terms">Policy and Terms</router-link>
                </li>
                <li>
                  <router-link class="text-body" to="/contact">Contact Us</router-link>
                </li>
              </ul>
            </div>
          </div>
           
        </section>
      </div>

      <div class="text-center p-3" style="background-color: pink; color: #FF69B4;">
        &copy; {{ currentYear }} Tee's Crown Haven
      </div>
    </footer>
  </div>
  
</template>
        

     
      
   

  

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>


<style scoped>

  footer {
    background-color: #FF69B4;
    color: #0e0d0d;
    padding: 20px 0;
    text-align: center;
  }

  .footer-link {
    color: #060505;
    margin: 0 15px;
    text-decoration: none;
  }
  form {
    margin-top: 20px;
  }

  .form-control {
    background-color: rgba(255, 255, 255, 0.8);
    color: #000;
  }

  .btn-outline {
    color: #101010;
  }

  .btn-outline:hover {
    color: #FF69B4;
  }



 
  .text-uppercase {
    color: #fff;
  }

  .text-body {
    color: #f9f4f4;
    text-decoration: none;
  }

  .text-body:hover {
    text-decoration: underline;
  }

 
  .text-center p-3 {
    background-color: rgba(0, 0, 0, 0.05);
    color: #FF69B4;
  }

  .icon-button {
  margin: 1px; 
  display: inline-block; 
}

.icon-button img {
  width: 35px; 
  height: auto; 
}
  
</style>

  
 
  

  


