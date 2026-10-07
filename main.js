
const express = require('express');
const authRoute = require('./routes/auth.route.js');

const app = express();
app.use(express.json());
app.use(authRoute);


const port = 3000;
const server = "localhost";
const msg = `Servidor Online em ${server}:${port }`
app.listen(port, () => console.log(msg));