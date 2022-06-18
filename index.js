const express = require('express')
const cors = require('cors');
const userModel = require('./models/user.model');
const middleTest = require('./middlewares/index');
const res = require('express/lib/response');
const { encrypt, compare, tokenValidator, generateToken } = require('./utils');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

const app = express();
const port = process.env.PORT || 5000;

require('./storages/connection');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
// app.use('/api/v1/users') routes en api, con version y endpoint
app.use('/auth', authRoutes);
app.use('/user', tokenValidator, userRoutes);


app.listen(port , ()=> console.log(`> Server is up and runnig on port: ${port}`));
