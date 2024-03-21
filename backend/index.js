import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import multer from 'multer'; // v1.0.5
import cartRoutes from './routes/cartRoutes.js';
import productRoutes from './routes/productRoutes.js';
import usersRoutes from './routes/usersRoutes.js'


config();

const app = express();
const upload = multer(); 

app.use(cors());
app.use(express.json());

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use product routes
app.use('/',productRoutes);

// Use users routes
app.use('/',usersRoutes);

// Use cart routes
app.use('/',cartRoutes);

app.use((req, res, next) => {
  res.status(404).json({ msg: 'Not Found' });
});
   
app.post('/profile', upload.array(), (req, res, next) => {
  console.log(req.body);
  res.json(req.body);
});
// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Internal Server Error' });
});

app.listen(process.env.PORT, function () {
    console.log('listening  on port http://localhost::' + process.env.PORT);
});



