import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { adduser, getusers, getuser, deleteuser, updateuser, checkuser } from '../models/database.js';

// Add a user
const addUser = async (req, res) => {
  const {Firstname, Lastname, userAge, Gender, userRole, emailAdd, userPass, userProfile } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(userPass, 10);

  await adduser(Firstname, Lastname, userAge, Gender, userRole, emailAdd, hashedPassword, userProfile);

  res.json({ msg: 'User added successfully!' });
};   

  
// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await getusers();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

// Get user by ID
const getUser = async (req, res) => {
    try {
        const user = await getuser(req.params.idusers);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    try {
        await deleteuser(req.params.idusers);
        res.status(200).json({ msg: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

// Update a user
const updateUser = async (req, res) => {
    try {
        const { FirstName, LastName, userAge, Gender, userRole, emailAdd, userPass, userProfile } = req.body;
        await updateuser(FirstName, LastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, req.params.idusers);
        res.status(200).json({ msg: 'User updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

// Login
const loginUser = async (req, res) => {
    try {
      const { emailAdd, userPass } = req.body;
  
      // Verify the user
      const user = await checkuser(emailAdd, userPass);
  
      if (!user) {
        return res.status(401).json({ msg: 'Invalid email or password' });
      }
  
     
      // Generate JWT token upon successful login
      const token = jwt.sign({ emailAdd: emailAdd }, process.env.SECRET_key, { expiresIn: '1h' });
    res.cookie('jwt', token, { httpOnly: true });
    res.json({ msg: 'Login successful', token, user: { Firstname: user.Firstname, Lastname: user.Lastname } });
  } catch (error) {
    console.error(error);
  }
}; 
const signupUser = async (req, res) => {
    try {
        // Destructure user data from request body
        const { Firstname, Lastname, userAge, Gender, userRole, emailAdd, userPass, userProfile } = req.body;

        // Check if the user already exists
        const existingUser = await checkuser(emailAdd);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(userPass, 10);

        // Add the user to the database
        await addUser(Firstname, Lastname, userAge, Gender, userRole, emailAdd, hashedPassword, userProfile);

        // Generate JWT token
        const token = jwt.sign({ emailAdd }, process.env.SECRET_key, { expiresIn: '1h' });

        // Send success response
        res.status(201).json({ message: 'User created successfully', token });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ message: 'Error creating user' });
    }
};

export { addUser, getUsers, getUser, deleteUser, updateUser, loginUser ,  signupUser};
