import express from 'express';
import { addToCart, removeFromCart, updateCartQuantity } from '../controller/cart.js';

const router = express.Router();

router.post('/cart', addToCart);
router.delete('/cart/:cartid', removeFromCart);
router.put('/cart/:cartid', updateCartQuantity);

export default router;
