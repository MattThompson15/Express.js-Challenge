const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/index.html'));
});

module.exports = router;