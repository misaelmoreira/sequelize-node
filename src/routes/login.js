const {Router} = require('express')

const loginRouter = Router()
const LoginController = require("../controllers/loginController");

/* Rotas User Login page. */
loginRouter.get('/',  LoginController.index);
loginRouter.post('/', LoginController.autenticar);
loginRouter.get('/logout',  LoginController.deslogar);

module.exports = loginRouter