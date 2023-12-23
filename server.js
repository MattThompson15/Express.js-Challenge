const express = require('express');
const path = require('path');
const apiroutes = require('./routes/apiroutes');
const htmlroutes = require('./routes/htmlroutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiroutes);
app.use('/', htmlroutes);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});