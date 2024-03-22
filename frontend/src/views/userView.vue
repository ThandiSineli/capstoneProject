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
            <input v-else type="text" v-model="user.editedFirstname" class="input-field">
          </td>
          <td>
            <template v-if="!user.editing">{{ user.Lastname }}</template>
            <input v-else type="text" v-model="user.editedLastname" class="input-field">
          </td>
          <td>
            <template v-if="!user.editing">{{ user.userage }}</template>
            <input v-else type="number" v-model.number="user.editedAge" class="input-field">
          </td>
          <td>
            <template v-if="!user.editing">{{ user.Gender }}</template>
            <input v-else type="text" v-model="user.editedGender" class="input-field">
          </td>
          <td>
            <template v-if="!user.editing">{{ user.userRole }}</template>
            <input v-else type="text" v-model="user.editedRole" class="input-field">
          </td>
          <td>
            <template v-if="!user.editing">{{ user.emailAdd }}</template>
            <input v-else type="email" v-model="user.editedEmail" class="input-field">
          </td>
          <td>
            <template v-if="!user.editing">{{ user.userPass }}</template>
            <input v-else type="password" v-model="user.editedPassword" class="input-field">
          </td>
          <td><img :src="user.userProfile" alt="User Image" class="user-image"></td>
          <td>
            <button v-if="!user.editing" @click="toggleEditMode(user)" class="action-button edit">Edit</button>
            <button v-else @click="saveChanges(user)" class="action-button save">Save</button>
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
      user.editing = !user.editing;
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
    await axios.patch(`https://capstoneproject-wv34.onrender.com/users/${user.idusers}`, {
      FirstName: user.editedFirstName,
      LastName: user.editedLastName,
      userage: user.editedAge,
      Gender: user.editedGender,
      userRole: user.editedRole,
      emailAdd: user.editedEmail,
      userPass: user.editedPassword,
      userProfile: user.editedProfile
    });
    user.FirstName = user.editedFirstName;
    user.LastName = user.editedLastName;
    user.userage = user.editedAge;
    user.Gender = user.editedGender;
    user.userRole = user.editedRole;
    user.emailAdd = user.editedEmail;
    user.userPass = user.editedPassword;
    user.userProfile = user.editedProfile;
    user.editing = false;
    Swal.fire({
      icon: 'success',
      title: 'User updated successfully',
      showConfirmButton: false,
      timer: 1500
    });
  } catch (error) {
    console.error('Error saving changes:', error);
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
        Swal.fire({
          icon: 'success',
          title: 'User deleted successfully',
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.error('Error deleting user:', error);
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
  border: 1px solid #ddd; /* Light gray border */
}

.user-table th {
  background-color: #FF69B4; /* Pink background */
  color: #FFF; /* White text color */
}

.user-table td {
  background-color: #fff; /* White background */
}

.zebra-stripe {
  background-color: #f9f9f9; /* Light gray background for even rows */
}

.delete-btn {
  padding: 8px 12px;
  margin-right: 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: #FF69B4; /* Pink background */
  color: #FFF; /* White text color */
}

.delete-btn:hover {
  background-color: #D84492; /* Darker pink on hover */
}

/* Media queries for responsiveness */
@media screen and (max-width: 700px) {
  .user-table th,
  .user-table td {
    padding: 8px;
  }
}

@media screen and (max-width: 576px) {
  .user-table th,
  .user-table td {
    padding: 6px;
    font-size: 14px;
  }
}
</style>

