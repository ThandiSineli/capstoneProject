import express from 'express';
import {
  updateUser,addUser,deleteUser,getUser,getUsers,loginUser,signupUser
} from '../controller/users.js';
import authenticate from '../middleware/authenticate.js';


const router = express.Router();

// Add a user   
// router.route('/users')
//          .post(addUser)
//          .get(getUsers)
router.route('/users')
.post((req, res, next) => {
  console.log('Request received at POST /users');
  next(); // Call the next middleware or route handler
}, addUser)
.get((req, res, next) => {
  console.log('Request received at GET /users');
  next(); // Call the next middleware or route handler
}, getUsers)

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