const { User } = require('../models');
var Cookie = require("../helpers/cookie");

class LoginController {
  async index (req, res, next) {
    var erro = req.query.erro;
    if (erro === undefined) {
      erro = "";
    }
    res.render("./login/index", { erro: erro });
  }

  async autenticar(req, res, next) {
    var user = new User();
    user.email = req.body.email;
    user.password_hash = req.body.password;

    try {
      var userValido = await User.findOne({ where: { email: user.email, password_hash: user.password_hash } });
    
      if (userValido == null) {
        var erro = "erro ao autenticar usuario"
        res.render("./login/index", { erro: erro });
      } else {
        Cookie.set(res, "usuario", userValido);
        res.redirect("/users");
      }      
    }catch(error) {
      var erro = 'Erro ao tentar logar' + error;   
      res.render("./login/index", { erro })
    } 
  }    

  async deslogar(req, res, next) {
    Cookie.remove(res, "usuario");
    res.redirect("/login/");
  }
};

module.exports = new LoginController();
