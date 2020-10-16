const express = require('express')
const router = express.Router()
const { toDoAuth, toDoAuthLogin } = require('../controller/auth')

router.post('/all', toDoAuth)
router.post('/login', toDoAuthLogin)

module.exports = router;