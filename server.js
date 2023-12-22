const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.json('public'));

app.use(express.static('public'));

app.get('/.api/notes', (req,res) => {
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8'));
    res.json(notes);
});