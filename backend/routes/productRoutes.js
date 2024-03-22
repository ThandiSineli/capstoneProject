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
router.get('/products',getProducts);

// Get product by ID
router.get('/products/:iditems',getProduct);

// Add a product
router.post('/products',addProduct);

// Delete a product
router.delete('/products/:iditems',deleteProduct);

// Update a product
router.patch('/products/:iditems',updateProduct);

export default router;