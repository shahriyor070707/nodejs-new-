const express = require('express')
const router = express.Router()
const { toDoAuth,
       toDoAuthLogin,
       getUser,
       getById,
       editUser,
       deleteUser
} = require('../controller/auth')

router.post('/register', toDoAuth)
router.post('/login', toDoAuthLogin)
router.get('/all', getUser)
router.get('/:id', getById)
router.put('/:id', editUser) //edit yani update doim put metodi bilan beriladi
router.delete('/:id', deleteUser)


module.exports = router;