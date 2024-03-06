import express from 'express';
import {
  getProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
} from '../controller/product.js';

const router = express.Router();

// Get all products
router.get('/products', getProducts);

// Get product by ID
router.get('/products/:iditem', getProduct);

// Add a product
router.post('/products', addProduct);

// Delete a product
router.delete('/products/:iditem', deleteProduct);

// Update a product
router.patch('/products/:iditem', updateProduct);

export default router;