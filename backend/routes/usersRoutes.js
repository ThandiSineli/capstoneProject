import express from 'express';
import {
  updateUser,addUser,deleteUser,getUser,getUsers,loginUser,signupUser
} from '../controller/users.js';
import authenticate from '../middleware/authenticate.js';


const router = express.Router();

// Add a user   
router.route('/users')
         .post(addUser)
         .get(getUsers)

// Get all users


router.route('/users/:idusers')
            // Get user by ID 
            .get( getUser)

            // Delete a user
            .delete( deleteUser)

            // Update a user
            .patch( updateUser)
  
            router.post('/login',loginUser);
            router.get('/profile',authenticate,(req, res) => {
                res.send(`Welcome ${req.user.Firstname}!`);
            });
          router.post('/signup',signupUser);

export default router;