const express = require('express');
const router = express.Router();
const notesController = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, notesController.create)
router.get('/', ensureLoggedIn, notesController.index)