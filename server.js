const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const { default: Messages, message } = require('./config/Messages');
const apiRoute = require("./app/routes/api/v1")


require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8080;
app.use(cors());

// database connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connection successfully..."))
    .catch((error) => console.log("Database connection error>>>", error));

app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/api/v1', apiRoute)

// test api
app.get('/test', (_req, res) => {
    res.status(200).json({ status: true, code: 200, message: message.common.test })
})

// set headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requeested-with,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})


app.listen(PORT, () => console.log(`App is listening On port:${PORT}`));