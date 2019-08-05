const express = require('express');
const router = express.Router();

const artist = require('../controllers/artist.controller');

router.get('/',artist.getArtists);
router.post('/', artist.createArtist)
router.get('/:id', artist.getArtist)
router.put('/:id', artist.editArtist)
router.delete('/:id',artist.deleteArtist)
module.exports = router;