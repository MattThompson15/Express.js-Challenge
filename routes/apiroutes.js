const fs = require('fs');
const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json'), 'utf-8'));

    res.json(notes);
});

router.post('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json'), 'utf-8'));

    const newNote = {
        id: generateUniqueID(),
        ...req.body,
    };

    notes.push(newNote);

    fs.writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(notes));

    res.json(newNote);
});

router.delete('/api/notes/:id', (req, res) => {
    let notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json'), 'utf-8'));

    const noteId = req.params.id;

    notes = notes.filter((note) => note.id !== noteId);

    fs.writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(notes));

    res.json({ success: true});
});

function generateUniqueID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

module.exports = router;