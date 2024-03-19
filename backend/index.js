import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import productRoutes from './routes/productRoutes.js'; 
import usersRoutes from './routes/usersRoutes.js';
import cartRoutes from './routes/cartRoutes.js';

config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Serve static files from the public directory

app.use(express("/public"));

// Use product routes (and other routes as needed)
app.use('/', productRoutes);
app.use('/', usersRoutes);
app.use('/', cartRoutes);

// Handle 404 Not Found
app.use((req, res, next) => {
  res.status(404).json({ msg: 'Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Internal Server Error' });
});

// Server listening
app.listen(process.env.PORT, function () {
    console.log('listening on port http://localhost:' + process.env.PORT);
});
