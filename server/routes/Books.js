const express = require('express')
const router = express.Router()
const { getBooks, createBooks, updateBooks, deleteBooks } = require('../controller/Book')
router.get('/', getBooks);
router.post('/create', createBooks);
router.patch('/:id', updateBooks);
router.delete('/:id', deleteBooks)

module.exports = router