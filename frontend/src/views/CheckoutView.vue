<template>
  <div class="cart-container">
    <div v-if="cartItems.length === 0">Your cart is empty</div>
    <div v-else>
      <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <p>{{ item.Prodname }}</p>
        <p>Quantity: {{ item.quantity }}</p>
        <p>Price: {{ item.price }}</p>
        <button @click="removeItem(index)">Remove</button>
      </div>
      <div>Total: {{ total }}</div>
      <button @click="checkout">Proceed to Checkout</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cartItems: [],
      total: 0
    };
  },
  mounted() {
    this.fetchCartItems();
  },
  methods: {
    async fetchCartItems() {
      try {
        const response = await axios.get('https://capstoneproject-wv34.onrender.com/cart'); 
        this.cartItems = response.data;
        this.calculateTotal();
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    },
    calculateTotal() {
      this.total = this.cartid.reduce((total, item) => total + (item.quantity * item.price), 0);
    },
    async removeItem(index) {
      try {
        await axios.delete(`https://capstoneproject-wv34.onrender.com/cart${cartid}`); 
        this.cartid.splice(index, 1);
        this.calculateTotal();
      } catch (error) {
        console.error('Error removing item from cart:', error);
      }
    },
    async checkout() {
      try {
  
        console.log('Checkout process initiated');
        
      } catch (error) {
        console.error('Error during checkout:', error);
      }
    }
  }
};
</script>

<style scoped>
.cart-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.cart-item {
  border-bottom: 1px solid #FF69B4;
  padding: 10px 0;
}

.cart-item p {
  margin: 5px 0;
}

.cart-item button {
  background-color: #000;
  color: #FF69B4;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.cart-item button:hover {
  background-color: #FF69B4;
  color: #000;
}

.total {
  margin-top: 20px;
  font-weight: bold;
}

.checkout-btn {
  background-color: #FF69B4;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.checkout-btn:hover {
  background-color: #D84492;
}
</style>
