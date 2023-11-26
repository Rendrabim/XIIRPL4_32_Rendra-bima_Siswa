const express = require('express')
const router = express.Router()

const usercontroller = require('../controller/TempatController');

router.get('/tempatPkl', usercontroller.index)

router.get('/data/:id', usercontroller.read)

router.post('/data', usercontroller.create)

router.put('/data/:id', usercontroller.update)

router.delete('/data/:id', usercontroller.delete)

module.exports = router;