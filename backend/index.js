import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cartRoutes from './routes/cartRoutes.js';
import productRoutes from './routes/productRoutes.js';
import usersRoutes from './routes/usersRoutes.js'


config();

const app = express();

app.use(cors());

app.use(express.json())
app.use(cookieParser());

app.use(express.static('public'));

// Use product routes
app.use('/products',productRoutes);

// Use users routes
app.use('/users',usersRoutes);

// Use cart routes
app.use('/cart',cartRoutes);
   
// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Internal Server Error' });
});

app.listen(process.env.PORT, function () {
    console.log('listening on port http://localhost:' + process.env.PORT);
});



