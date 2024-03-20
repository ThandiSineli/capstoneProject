<template>
  <div class="login-container">
    <h2>Login</h2>
    <form class="login-box" @submit.prevent="loginUser">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="loginForm.emailAdd">

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="loginForm.userPass">

      <button type="submit">Login</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import swal from 'sweetalert';

export default {
  data() {
    return {
      loginForm: {
        emailAdd: "",
        userPass: "",
      },
      errorMessage: null,
    };
  },
  methods: {
    async loginUser() {
  try {
    const user = {
      emailAdd: this.loginForm.emailAdd,
      userPass: this.loginForm.userPass,
    };

    await this.$store.dispatch("loginUser", user);

    this.$router.push("/home");

    // Display a welcome message to the user
    swal("Welcome!", "You have logged in successfully!", "success");
  } catch (error) {
    console.error('Error logging in user:', error);
    this.errorMessage = error.message;
    // Display an error message to the user
    swal("Error!", "Failed to login. Please check your credentials and try again.", "error");
  }
}

  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  color: #FF69B4;
}

input {
  padding: 8px;
  border: 1px solid #FF69B4;
  border-radius: 4px;
}

button {
  background-color: #FF69B4;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #D84492;
}

.error-message {
  color: red;
}
</style>
