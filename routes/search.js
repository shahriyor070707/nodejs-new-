const express = require('express')
const router = express.Router();
const { toDoFilter, search } = require('../controller/search')

router.get('/all', toDoFilter)
router.get('/', search)

module.exports = router;