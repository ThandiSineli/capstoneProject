<template>
  <div>
    <footer class="bg-pink text-white p-4 text-center">
      <!-- Grid container -->
      <div class="container">
        <!-- Section: Social media -->
        <section class="mb-4">
          <!-- Instagram -->
          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button">
            <i class="fab fa-instagram"></i>
          </a>
          <!-- Facebook -->
          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button">
            <i class="fab fa-facebook-f"></i>
          </a>
          <!-- Twitter -->
          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button">
            <i class="fab fa-twitter"></i>
          </a>
          <!-- Add more social media icons as needed -->
        </section>
        <!-- Section: Social media -->

        <!-- Section: Form -->
        <section>
          <form action="">
            <!-- Grid row -->
            <div class="row d-flex justify-content-center">
              <!-- Grid column -->
              <div class="col-auto">
                <p class="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-5 col-12">
                <!-- Email input -->
                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="email" id="form5Example24" class="form-control" />
                  <label class="form-label" for="form5Example24">Email address</label>
                </div>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-auto">
                <!-- Submit button -->
                <button data-mdb-ripple-init type="submit" class="btn btn-outline mb-4">
                  Subscribe
                </button>
              </div>
              <!-- Grid column -->
            </div>
            <!-- Grid row -->
          </form>
        </section>
        <!-- Section: Form -->

        <!-- Section: Text -->
        <section class="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus
            placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>
        <!-- Section: Text -->

        <!-- Section: Links -->
        <section class="mb-4">
          <!-- Grid row -->
          <div class="row">
            <!-- Grid column -->
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
            <!-- Grid column -->

            <!-- Add more link sections as needed -->

          </div>
          <!-- Grid row -->
        </section>
        <!-- Section: Links -->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: pink; color: #FF69B4;">
        &copy; {{ currentYear }} Tee's Crown Haven
      </div>
      <!-- Copyright -->
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
  /* Footer Styles */
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

  .footer-link:hover {
    text-decoration: underline;
  }

  /* Social Media Icons */
  .btn-floating {
    color: #111111;
  }

  /* Newsletter Form Styles */
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

  /* Text Section Styles */
  p {
    color: #f9f1f1;
  }

  /* Links Section Styles */
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

  /* Copyright Section Styles */
  .text-center p-3 {
    background-color: rgba(0, 0, 0, 0.05);
    color: #FF69B4;
  }
</style>


