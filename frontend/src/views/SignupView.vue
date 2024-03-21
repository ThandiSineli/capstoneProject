<template>
  <div class="signup-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="signup">
      <label for="firstname">First Name:</label>
      <input type="text" id="firstname" v-model="firstname" required>

      <label for="lastname">Last Name:</label>
      <input type="text" id="lastname" v-model="lastname" required>

      <label for="userAge">Age:</label>
      <input type="number" id="userAge" v-model="userAge" required>

      <label for="Gender">Gender:</label>
      <select id="Gender" v-model="Gender" required>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>

      <button type="submit">Sign Up</button>
    </form>
    <p>Already registered? <router-link to="/login">Login here</router-link>.</p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      userAge: null,
      Gender: '',
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async signup() {
      try {
        const response = await axios.post('https://capstoneproject-wv34.onrender.com/users', {
          Firstname: this.firstname,
          Lastname: this.lastname,
          userAge: this.userAge, 
          Gender: this.Gender, 
          emailAdd: this.email, 
          userPass: this.password 
        });
        swal({
          title: "Success",
          text: "Signup successful!",
          icon: "success",
          button: "OK",
        }).then(() => {
          // Redirect to login page or any other action
          this.$router.push('/login');
        });
      } catch (error) {
        // Handle signup error
        console.error('Signup error:', error);
        // Display error message if needed
    }
  }
}
};
</script>
<style scoped>
.signup-container {
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

input,
select {
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
