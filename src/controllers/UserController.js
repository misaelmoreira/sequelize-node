const { User } = require('../models');

class UserController {
    async index(req, res){        ;
        const users = await User.findAll();
        return res.render('users/index', { users });
    }

    async createUserGet(req, res){        
        return res.render('users/new');
    }

    async createUserPost(req, res){ 
        try {
            const { name, email, password_hash } = req.body;
            const newUser = await User.create({ 
                name, 
                email, 
                password_hash 
            });
            return res.redirect('users');
        } catch(error) {
            console.error('Erro ao criar usuário:', error);
            res.status(500).send('Erro ao criar usuário');
        }  
    }

    async deleteUserGet(req, res){        
        const userId = req.params.id;
        const userDb = await User.findByPk(userId)

        const msg = Object;
        res.render('users/delete', { user: userDb, msg });
    }

    async deleteUserPost(req, res){ 
        try {  
            const userId = req.params.id;
            const result = await User.destroy({
                where: { id: userId }
            });
            
            if (result === 0) {
                const msg = Object;
                const userDb = await User.findByPk(userId)
                msg.erro = 'Usuário não encontrado';           
                return res.render('users/delete', { user: userDb, msg })
            }

            return res.redirect('/users');
        } catch(error) {
            msg.erro = 'Erro ao excluir usuário:', error;   
            res.render('users/delete', { msg })
        }  
    }

    // Rota exibir formulario de edição
    async updateUserGet(req, res){
        const msg = Object;

        try {
          const userId = req.params.id;
          const user = await User.findByPk(userId);
      
          if (!user) {            
            msg.erro = 'Usuário não encontrado';           
            return res.render('users/edit', { user, msg })
          }
      
          return res.render('users/edit', { user, msg: "" });
        } catch (error) {
            msg.erro = 'Erro ao exibir formulário de edição';           
            return res.render('users/edit', { user, msg })
        }
      }


    // Rota de processamento a atualização
    async updateUserPost(req, res){
        const msg = Object;

        try {
          const userId = req.params.id;
          const { name, email, password_hash } = req.body;
      
          const user = await User.findByPk(userId);
      
          if (!user) {
            msg.erro = 'Usuário não encontrado';           
            return res.render('users/edit', { user, msg })
          }
      
          // Atualize os dados do usuário
          user.name = name;
          user.email = email;
          user.password_hash = password_hash;
      
          await user.save();
      
          return res.redirect('/users');
        } catch (error) {
            msg.erro = 'Erro ao atualizar usuário: ' + error;           
            return res.render('users/edit', { user, msg })
        }
      }
}

module.exports = new UserController();