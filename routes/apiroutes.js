const fs = require('fs');
const path = require('path');
const express = require('express');

const router = express.Router();
// API route to get all saved notes
router.get('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json'), 'utf-8'));

    res.json(notes);
});
//API route to save a new note
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
//API route to delete a note by ID
router.delete('/api/notes/:id', (req, res) => {
    let notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json'), 'utf-8'));

    const noteId = req.params.id;

    notes = notes.filter((note) => note.id !== noteId);

    fs.writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(notes));

    res.json({ success: true});
});
//Function to generate a unique ID for new notes
function generateUniqueID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

module.exports = router;