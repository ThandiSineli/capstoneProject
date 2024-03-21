<template>
  <div>
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
          <td>
            <template v-if="!user.editing">{{ user.Firstname }}</template>
            <input v-else type="text" v-model="user.editedFirstname">
          </td>
          <td>
            <template v-if="!user.editing">{{ user.Lastname }}</template>
            <input v-else type="text" v-model="user.editedLastname">
          </td>
          <td>
            <template v-if="!user.editing">{{ user.userage }}</template>
            <input v-else type="number" v-model.number="user.editedAge">
          </td>
          <td>
            <template v-if="!user.editing">{{ user.Gender }}</template>
            <input v-else type="text" v-model="user.editedGender">
          </td>
          <td>
            <template v-if="!user.editing">{{ user.userRole }}</template>
            <input v-else type="text" v-model="user.editedRole">
          </td>
          <td>
            <template v-if="!user.editing">{{ user.emailAdd }}</template>
            <input v-else type="email" v-model="user.editedEmail">
          </td>
          <td>
            <template v-if="!user.editing">{{ user.userPass }}</template>
            <input v-else type="password" v-model="user.editedPassword">
          </td>
          <td><img :src="user.userProfile" alt="User Image" class="user-image"></td>
          <td>
            <button v-if="!user.editing" @click="toggleEditMode(user)">Edit</button>
            <button v-else @click="saveChanges(user)">Save</button>
            <button class="delete-btn" @click="confirmDelete(user.idusers)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    toggleEditMode(user) {
      // Toggle editing mode for the clicked user
      user.editing = !user.editing;
      // Initialize edited properties with current values
      user.editedFirstname = user.Firstname;
      user.editedLastname = user.Lastname;
      user.editedAge = user.userage;
      user.editedGender = user.Gender;
      user.editedRole = user.userRole;
      user.editedEmail = user.emailAdd;
      user.editedPassword = user.userPass;
    },
    async saveChanges(user) {
      try {
        // Send PUT request to update the user
        await axios.put(`https://capstoneproject-wv34.onrender.com/users/${user.idusers}`, {
          Firstname: user.editedFirstname,
          Lastname: user.editedLastname,
          userage: user.editedAge,
          Gender: user.editedGender,
          userRole: user.editedRole,
          emailAdd: user.editedEmail,
          userPass: user.editedPassword
        });
        // Update user data in the table
        user.Firstname = user.editedFirstname;
        user.Lastname = user.editedLastname;
        user.userage = user.editedAge;
        user.Gender = user.editedGender;
        user.userRole = user.editedRole;
        user.emailAdd = user.editedEmail;
        user.userPass = user.editedPassword;
        // Exit editing mode
        user.editing = false;
        // Show success message
        Swal.fire({
          icon: 'success',
          title: 'User updated successfully',
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.error('Error saving changes:', error);
        // Show error message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to update user!',
        });
      }
    },
    async confirmDelete(idusers) {
      try {
        await axios.delete(`https://capstoneproject-wv34.onrender.com/users/${idusers}`);
        await this.fetchUsers();
        // Show success message
        Swal.fire({
          icon: 'success',
          title: 'User deleted successfully',
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.error('Error deleting user:', error);
        // Show error message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to delete user!',
        });
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

.delete-btn {
  padding: 8px 12px;
  margin-right: 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: #000;
  color: #FF69B4;
}

.delete-btn:hover {
  background-color: #D3D61F;
}
</style>
