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

const updateproduct = async (updateData, iditems) => {
    let sqlQuery = "UPDATE products SET";
    const values = [];
    for (const key in updateData) {
      if (updateData.hasOwnProperty(key)) {
        sqlQuery += ` ${key}=?,`;
        values.push(updateData[key]);
      }
    }
    sqlQuery = sqlQuery.slice(0, -1);
    sqlQuery += "WHERE iditems=?";
    values.push(iditems);
      await pool.query(sqlQuery, values);
    return getproduct(iditems);
  };

// Users logic

const adduser = async (Firstname, Lastname, userage, Gender, userRole, emailAdd, userPass, userProfile ) => {
    try {
        // Hash the password
        

        // Insert the user into the database with the hashed password
        await pool.query(
            "INSERT INTO users (FirstName, LastName, userage, Gender, userRole, emailAdd, userPass, userProfile) VALUES (?,?,?,?,?,?,?,?)",
            [Firstname, Lastname, userage, Gender, userRole, emailAdd, userPass, userProfile]
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

const updateuser = async (updateData, idusers) => {
    let sqlQuery = "UPDATE users SET";
    const values = [];
    for (const key in updateData) {
      if (updateData.hasOwnProperty(key)) {
        sqlQuery += ` ${key}=?,`;
        values.push(updateData[key]);
      }
    }
    sqlQuery = sqlQuery.slice(0, -1);
    sqlQuery += " WHERE idusers=?";
    values.push( idusers);
      await pool.query(sqlQuery, values);
    return  getproduct( idusers);
  };
  
  

const checkuser = async (emailAdd, userPass) => {
    try {
        const [result] = await pool.query(`SELECT * FROM users WHERE emailAdd = ?`, [emailAdd]);

        if (result.length === 0) {
            // User not found
            return null;
        }

        const hashedPassworded = result[0].userPass;

        // Compare the hashed passwords
        const correctPassword = await bcrypt.compare(userPass, hashedPassworded);

        if (!correctPassword) {
            // Passwords do not match
            return null;
        }

        // Passwords match, return the user information
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