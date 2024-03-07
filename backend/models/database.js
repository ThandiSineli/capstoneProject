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

const adduser = async (idusers, Firstname, Lastname, userage, Gender, userRole, emailAdd, userPass, userProfile) => {
    // Hash the password
   

    await pool.query(
        "INSERT INTO users (idusers, Firstname, Lastname, userage, Gender, userRole, emailAdd, userPass, userProfile) VALUES (?,?,?,?,?,?,?,?,?)",
        [idusers, Firstname, Lastname, userage, Gender, userRole, emailAdd,userPass, userProfile]
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
    `, [Firstname, Lastname, userAge, Gender, userRole, emailAdd, userPass, userProfile, idusers]);
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