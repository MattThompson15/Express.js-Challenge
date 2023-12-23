const express = require('express');
const path = require('path');
const apiroutes = require('./routes/apiroutes');
const htmlroutes = require('./routes/htmlroutes');

const app = express();
const PORT = process.env.PORT || 3001;
//Middleware to handle form data and JSON objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Middleware to serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
//Use API and HTML routes
app.use('/api', apiroutes);
app.use('/', htmlroutes);
//Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});