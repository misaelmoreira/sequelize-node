const { Router } = require('express')
const LoginMiddleware = require("../middleware/login");

const router = Router()
const userRouter = require('./users')
const loginRouter = require('./login')

router.use('/users', userRouter)
router.use('/login', loginRouter)

router.use('/', LoginMiddleware, function(req, res) {
    return res.render('index', {});
})

module.exports = router