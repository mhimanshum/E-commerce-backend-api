const bodyParser = require('body-parser');
const express = require('express');
const dbConnect = require('./config/dbconnect');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const authRoute = require('./routes/authRoute');
const { notfound, errorHandler } = require('./middlewares/errorHandler');
const cookie = require('cookie-parser');
const cookieParser = require('cookie-parser');

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })), app.use(cookieParser());
app.use('/api/user', authRoute), app.use(notfound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running at PORT ${PORT}`);
});
