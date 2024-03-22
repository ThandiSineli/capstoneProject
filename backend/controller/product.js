import {
    getproducts,
    getproduct,
    addproduct,
    deleteproduct,
    updateproduct,
  } from '../models/database.js';
  
  // Get all products
   const getProducts = async (req, res) => {
    res.send(await getproducts());
  };
  
  // Get product by ID
  const getProduct = async (req, res) => {
    res.send(await getproduct(+req.params.iditems));
  };
  
  // Add a product
  const addProduct = async (req, res) => {
    const { iditems, prodName, quantity, amount, category, prodUrl, description } = req.body;
    res.send(await addproduct(iditems, prodName, quantity, amount, category, prodUrl,description));
  };
  
  // Delete a product
   const deleteProduct = async (req, res) => {
    res.send(await deleteproduct(req.params.iditem));
  };
  
  // Update a product
  const updateProduct = async (req, res) => {
    try {
      const iditems = +req.params.iditems;
      const updateData = req.body; // Contains only the fields to be updated
  
      // Update product in the database
      await updateproduct(updateData, iditems);
  
      // Respond with the updated product
      const updatedProduct = await getproduct(iditems);
      if (!updatedProduct) {
        return res.status(404).json({ msg: 'Product not found' });
      }
  
      res.json(updatedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Internal Server Error' });
    }
  };
  
  
  
  export{getProducts,getProduct,addProduct,deleteProduct,updateProduct,}
  
  