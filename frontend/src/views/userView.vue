<template>
  <table class="user-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Role</th>
        <th>Email</th>
        <th>Password</th>
        <th>Profile</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in users" :key="user.idusers" :class="{ 'zebra-stripe': index % 2 === 0 }">
        <td>{{ index + 1 }}</td>
        <td><h2>{{ user.Firstname }}</h2></td>
        <td><p>Surname: {{ user.Lastname }}</p></td>
        <td><p>Age: {{ user.userage }}</p></td>
        <td><p>Gender: {{ user.Gender }}</p></td>
        <td><p>Role: {{ user.userRole }}</p></td>
        <td><p>Email: {{ user.emailAdd }}</p></td>
        <td><p>Password: {{ user.userPass }}</p></td>
        <td><img :src="user.userProfile" alt="user Image" class="user-image"></td>
        <td>
          <button class="edit-btn" @click="editUser(user)">Edit</button>
          <button class="delete-btn" @click="deleteUser(user.idusers)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios';

export default {
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    async editUser(user) {
      // Navigate to the edit user page with the user's ID
      this.$router.push({ name: 'edituser', params: { id: user.idusers } });
    },
    async deleteUser(userId) {
      try {
        await axios.delete(`https://capstoneproject-wv34.onrender.com/users/${userId}`);
        
        await this.fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    async fetchUsers() {
      try {
        const { data } = await axios.get('https://capstoneproject-wv34.onrender.com/users');
        this.$store.commit('setUsers', data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
  },
  mounted() {
    // Fetch users when the component is mounted
    this.fetchUsers();
  },
};
</script>

<style scoped>
.user-table {
  width: 100%;
  border-collapse: collapse;
  color: #000;
}

.user-table th,
.user-table td {
  padding: 12px;
  text-align: left;
  border: 2px solid #FF69B4;
}

.user-table th {
  background-color: #000;
  color: #FFF;
}

.zebra-stripe {
  background-color: #FFF;
}

.edit-btn,
.delete-btn {
  padding: 8px 12px;
  margin-right: 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.edit-btn {
  background-color: #FF69B4;
  color: #000;
}

.delete-btn {
  background-color: #000;
  color: #FF69B4;
}

.edit-btn:hover,
.delete-btn:hover {
  background-color: #D3D61F;
}
</style>
