import { pool } from '../config/config.js';

const addToCart = async (req, res) => {
  try {
    const { iditems, idusers, quantity } = req.body;
    const totalPrice = calculateTotalPrice(iditems, quantity); // Calculate total price based on item ID and quantity
    await pool.query('INSERT INTO cart (iditems, idusers, quantity, total) VALUES (?, ?, ?, ?)', [iditems, idusers, quantity, totalPrice]);
    res.status(201).json({ message: 'Item added to cart successfully' });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { cartid } = req.params;
    await pool.query('DELETE FROM cart WHERE cartid = ?', [cartid]);
    res.status(200).json({ message: 'Item removed from cart successfully' });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateCartQuantity = async (req, res) => {
  try {
    const { cartid } = req.params;
    const { quantity } = req.body;
    await pool.query('UPDATE cart SET quantity = ? WHERE cartid = ?', [quantity, cartid]);
    res.status(200).json({ message: 'Cart quantity updated successfully' });
  } catch (error) {
    console.error('Error updating cart quantity:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Helper function to calculate total price
const calculateTotalPrice = (iditems, quantity) => {
  // Query the database to get the price of the item with itemId
  // Calculate the total price based on the item price and quantity
};

export { addToCart, removeFromCart, updateCartQuantity };
