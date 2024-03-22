import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { adduser, getusers, getuser, deleteuser, updateuser, checkuser } from '../models/database.js';

// Add a user
const addUser = async (req, res) => {
  const {Firstname, Lastname, userage, Gender, userRole, emailAdd, userPass, userProfile } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(userPass, 15);

  await adduser(Firstname, Lastname, userage, Gender, userRole, emailAdd, hashedPassword, userProfile);

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
      const idusers = +req.params.idusers;
      const updateData = req.body; // Contains only the fields to be updated
      // Update user in the database
      await updateuser(updateData, idusers);
      // Respond with the updated user
      res.json(await getuser(idusers));
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

        // Send success response with token and user information
        res.status(200).json({ msg: 'Login successful', token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

const signupUser = async (req, res) => {
    try {
        const { Firstname, Lastname, userage, Gender, userRole, emailAdd, userPass, userProfile } = req.body;

        // Check if the user already exists
        const existingUser = await checkuser(emailAdd);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password before storing it
        const hashedPassworded = await bcrypt.hash(userPass, 15);

        // Add the user to the database with the hashed password
        await adduser(Firstname, Lastname, userage, Gender, userRole, emailAdd, hashedPassworded, userProfile);

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user' });
    }
};



export { addUser, getUsers, getUser, deleteUser, updateUser, loginUser ,  signupUser};
