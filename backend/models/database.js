import { pool } from '../config/config.js';
import bcrypt from 'bcrypt';

// Items logic

const getproducts = async () => {
    const [result] = await pool.query(`SELECT * FROM products`);
    return result;
};

const getproduct = async (iditem) => {
    const [result] = await pool.query(`SELECT * FROM products WHERE iditem = ?`, [iditem]);
    return result;
};

const addproduct = async (iditem, prodName, quantity, amount, category, prodUrl) => {
    await pool.query(
        "INSERT INTO products (iditem, prodName, quantity, amount, Category, prodUrl) VALUES (?,?,?,?,?,?)",
        [iditem, prodName, quantity, amount, category, prodUrl]
    );
    return getproducts();
};

const deleteproduct = async (iditem) => {
    await pool.query(`DELETE FROM products WHERE iditem = ?`, [iditem]);
    return getproducts();
};

const updateproduct = async (prodName, prodUrl, quantity, amount, category, iditem) => {
    await pool.query(`
        UPDATE products
        SET prodName=?, prodUrl=?, quantity=?, amount=?, category=?
        WHERE iditem=?
    `, [prodName, prodUrl, quantity, amount, category, iditem]);
    return getproducts();
};

// Users logic

const adduser = async (idusers, Firstname, Lastname, userAge, Gender, userRole, emailAdd, userPass, userProfile) => {
    // Hash the password
    const hashedPassword = await bcrypt.hash(userPass, 10);

    await pool.query(
        "INSERT INTO users (idusers, Firstname, Lastname, userAge, Gender, userRole, emailAdd, userPass, userProfile) VALUES (?,?,?,?,?,?,?,?,?)",
        [idusers, Firstname, Lastname, userAge, Gender, userRole, emailAdd, hashedPassword, userProfile]
    );

    return getusers();
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
    `, [firstName, Lastname, userAge, Gender, userRole, emailAdd, userPass, userProfile, idusers]);
    return getusers();
};

const checkuser = async (emailAdd, userPass) => {
    try {
        const [result] = await pool.query(`SELECT userPass FROM users WHERE emailAdd = ?`, [emailAdd]);

        if (result.length === 0) {
            // User not found
            return false;
        }

        const hashedPassword = result[0].userPass;

        // Compare the provided password with the hashed password
        const passwordMatch = await bcrypt.compare(userPass, hashedPassword);

        return passwordMatch;
    } catch (error) {
        console.error(error);
        return false;
    }
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
};