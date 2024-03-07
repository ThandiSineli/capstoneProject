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
  let updateProduct = async (req, res) => {
    try {
      const { prodName, quantity, amount, category, producturl } = req.body;
      await updateproduct(prodName, quantity, amount, category,producturl +req.params.iditems);
      res.json(await getproducts());
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Internal Server Error' });
    }
  };
  
  
  
  export{getProducts,getProduct,addProduct,deleteProduct,updateProduct,}
  
  