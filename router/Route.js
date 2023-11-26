const express = require('express')
const router = express.Router()

const usercontroller = require('../controller/TempatController');

router.get('/tempatPkl', usercontroller.index)

router.get('/data/:lokasi', usercontroller.read)

router.post('/data', usercontroller.create)

router.put('/data/:nama', usercontroller.update)

router.delete('/data/:nama', usercontroller.delete)

module.exports = router;