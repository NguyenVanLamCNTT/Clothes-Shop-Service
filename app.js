const express = require('express');
const cors = require('cors');
const authRouter = require('./routers/auth');
const categoriesRouter = require('./routers/categories');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth',authRouter);
app.use('/api/categories',categoriesRouter);
app.get('/health', (req, res) => res.status(200).send('ClothesShop Service'));
module.exports = app;

