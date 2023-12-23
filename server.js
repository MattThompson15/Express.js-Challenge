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

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8'));

    newNote.id = notes.length + 1;
    notes.push(newNote);

    fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringlfy(notes));

    res.json(newNote);
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'note.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server is listening on http://localhost:${PORT}');
});