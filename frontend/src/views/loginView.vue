<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>

      <button type="submit">Login</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <p>Don't have an account? <router-link to="/signup">Sign up here</router-link>.</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('https://capstoneproject-wv34.onrender.com/login', {
          email: this.emailAdd,
          password: this.userPass
        });
        console.log('Login successful:', response.data);
        // Optionally, you can redirect the user to a dashboard or home page after successful login
        this.$router.push('/');
      } catch (error) {
        console.error('Login error:', error);
        this.errorMessage = 'Invalid email or password. Please try again.';
      }
    }
  }
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
