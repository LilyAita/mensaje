const express = require('express');
var mailRoutes = require('./routes/mail.js');
var app = express();

console.log("buenos");


app.use('/mail',mailRoutes);

//Get the server running
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';
app.listen(port, host);
console.log(`Your server is running on ${host}:${port}`);