import { pool } from '../config/config.js';
import bcrypt from 'bcrypt';

// Items logic

const getproducts = async () => {
    const [result] = await pool.query(`SELECT * FROM products`);
    return result;
};

const getproduct = async (iditems) => {
    const [result] = await pool.query(`SELECT * FROM products WHERE iditems = ?`, [iditems]);
    return result;
};

const addproduct = async (iditems, prodName, quantity, amount, category,producturl,description) => {
    await pool.query(
        "INSERT INTO products (iditems, prodName, quantity, amount, category, producturl,description) VALUES (?,?,?,?,?,?,?)",
        [iditems, prodName, quantity, amount, category, producturl,description]
    );
    return getproducts();
};

const deleteproduct = async (iditems) => {
    await pool.query(`DELETE FROM products WHERE iditems = ?`, [iditems]);
    return getproducts();
};

const updateproduct = async (iditems, prodName, quantity, amount, category,producturl,description) => {
    await pool.query(`
        UPDATE products
        SET prodName=?, quantity=?, amount=?, category=? ,producturl=? ,description=?
        WHERE iditems=?
    `, [iditems, prodName, quantity, amount, category,producturl,description]);
    return getproducts();
};

// Users logic

const adduser = async (Firstname, Lastname, userAge, Gender, userRole, emailAdd, userPass, userProfile ) => {
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(userPass, 10);

        // Insert the user into the database with the hashed password
        await pool.query(
            "INSERT INTO users (FirstName, LastName, userAge, Gender, userRole, emailAdd, userPass, userProfile) VALUES (?,?,?,?,?,?,?,?,?)",
            [Firstname, Lastname, userAge, Gender, userRole, emailAdd, hashedPassword, userProfile]
        );

        // Return the list of users
        return await getusers();
    } catch (error) {
        console.error(error);
        throw new Error('Error adding user');
    }
};


const getusers = async () => {
    const [result] = await pool.query(`SELECT * FROM users`);
    return result;
};

const getuser = async (idusers) => {
    const [result] = await pool.query(`SELECT * FROM users WHERE idusers = ?`, [idusers]);
    return result;
};

const deleteuser = async (idusers) => {
    await pool.query(`DELETE FROM users WHERE idusers = ?`, [idusers]);
    return getusers();
};

const updateuser = async (Firstname, Lastname, userAge, Gender, userRole, emailAdd, userPass, userProfile, idusers) => {
    await pool.query(`
        UPDATE users 
        SET Firstname=?, Lastname=?, userAge=?, Gender=?, userRole=?, emailAdd=?, userPass=?, userProfile=?
        WHERE idusers=?
    `, [Firstname, Lastname, userAge, Gender, userRole, emailAdd, userPass, userProfile, idusers]);
    return getusers();
};

const checkuser = async (emailAdd, userPass) => {
    try {
      const [result] = await pool.query(`SELECT * FROM users WHERE emailAdd = ?`, [emailAdd]);
  
      if (result.length === 0) {
        // User not found
        return null;
      }
  
      console.log("userPass from request:", userPass);
      console.log("result[0].userPass from user object:", result[0].userPass);
  
      // Compare the hashed passwords
      const correctPassword = await bcrypt.compare(userPass, result[0].userPass);
  
      if (!correctPassword) {
        // Return null if the passwords do not match
        return null;
      }
  
      // Return the user row if the passwords match
      return result[0];
    } catch (error) {
      console.error(error);
      throw new Error('Error checking user');
    }
  };

  const getCartItems = async (idusers) => {
    const [rows] = await pool.query('SELECT * FROM cart WHERE idusers = ?', [idusers]);
    return rows;
  };

export {
    getproducts,
    getproduct,
    addproduct,
    deleteproduct,
    updateproduct,
    adduser,
    checkuser,
    getusers,
    getuser,
    deleteuser,
    updateuser,
    getCartItems
};      