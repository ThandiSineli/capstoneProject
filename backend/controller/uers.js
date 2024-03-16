import jwt from 'jsonwebtoken'

import bcrypt from 'bcrypt';
import { adduser, getusers, getuser, deleteuser, updateuser, checkuser } from '../models/database.js';

// Add a user
const addUser = async (req, res) => {
    const { idusers, Firstname, Lastname, userage, Gender, userRole, emailAdd, userPass, userProfile } = req.body;

    try {
        // Check if the user already exists
        const userExists = await checkuser(emailAdd);
        if (userExists) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(userPass, 10);

        // Add the user to the database
        await adduser(idusers, Firstname, Lastname, userage, Gender, userRole, emailAdd, hashedPassword, userProfile);

        res.status(201).json({ msg: 'User added successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
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
const login = async (req, res) => {
  const { emailAdd, userPass } = req.body;

  // Check if user credentials are valid
  const isValidUser = await checkuser(emailAdd, userPass);

  if (!isValidUser) {
    return res.status(401).json({ msg: 'Unauthorized' });
  }

  // User credentials are valid, generate JWT token
  const payload = { email: emailAdd }; // Customize payload as needed
  const token = jwt.sign(payload, process.env.SECRET_key, { expiresIn: '1h' }); // Adjust expiration time as needed

  // Return token to the client
  res.cookie('token', token, { httpOnly: true });
  res.json({ token });
};


export { addUser, getUsers, getUser, deleteUser, updateUser, login };
