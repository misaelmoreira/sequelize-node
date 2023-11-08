const {Router} = require('express')

const usersController = require('../controllers/UserController')
const userRouter = Router()

userRouter.get('/', usersController.index)

userRouter.get('/create', usersController.createUserGet)
userRouter.post('/', usersController.createUserPost)

userRouter.get('/edit/:id', usersController.updateUserGet)
userRouter.post('/edit/:id', usersController.updateUserPost)

userRouter.get('/delete/:id', usersController.deleteUserGet)
userRouter.post('/delete/:id', usersController.deleteUserPost)

module.exports = userRouter