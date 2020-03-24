var express = require('express')

var TracksControllers = require('../controllers/tracksController')

var router = express.Router()

router.get('/', TracksControllers.getTracks)



router.post('/', TracksControllers.createTrack)



router.get('/:id', TracksControllers.getTrack)



// router.delete('/:id', TracksControllers.deleteTrack)


router.put('/:id', TracksControllers.updateTrack)

router.patch('/:id', TracksControllers.patchTrack)


module.exports = router