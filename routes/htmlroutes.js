const path = require('path');
const express = require('express');

const router = express.Router();
//HTML route to render the notes page
router.get('/notes', (req, res) => {
    //Send the notes.html file as the response
    res.sendFile(path.join(__dirname, '../public/assets/notes.html'));
});
// Default HTML route, renders the homepage
router.get('*', (req, res) => {
    //Send the index.html file as the response
    res.sendFile(path.join(__dirname, '../public/assets/index.html'));
});

module.exports = router;