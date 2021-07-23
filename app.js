const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors =require('cors');
const helmet = require('helmet');
require('dotenv').config();

const saucesRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

//connect to MongoDB cluster
mongoose.connect(process.env.DB_URL,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

//logic to avoid getting stuck by CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes);


// use cors package to avoid cors issues
app.options('*', cors());

module.exports = app;