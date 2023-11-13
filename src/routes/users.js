const {Router} = require('express')
const LoginMiddleware = require("../middleware/login");

const usersController = require('../controllers/UserController')
const userRouter = Router()

userRouter.get('/', LoginMiddleware, usersController.index)

userRouter.get('/create', LoginMiddleware, usersController.createUserGet)
userRouter.post('/', LoginMiddleware, usersController.createUserPost)

userRouter.get('/edit/:id', LoginMiddleware, usersController.updateUserGet)
userRouter.post('/edit/:id', LoginMiddleware, usersController.updateUserPost)

userRouter.get('/delete/:id', LoginMiddleware, usersController.deleteUserGet)
userRouter.post('/delete/:id', LoginMiddleware, usersController.deleteUserPost)

module.exports = userRouter