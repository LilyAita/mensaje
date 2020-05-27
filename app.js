const express = require('express');
var mailRoutes = require('./routes/mail.js');
var app = express();

console.log("buenos");
app.get('/', (req, res) => {
  res.send('HEY!')
});

app.use('/mail',mailRoutes);

//Get the server running
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';
//app.listen(port, host);
//console.log(`Your server is running on ${host}:${port}`);
app.listen(5000, () => console.log('Server running on port 5000'))
