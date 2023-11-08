const { Router } = require('express')

const router = Router()
const userRouter = require('./users')

router.use('/users', userRouter)

router.use('/', function(req, res) {
    return res.render('index', {});
})

module.exports = router