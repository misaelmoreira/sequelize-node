# Iniciar a aplicação
npm start 

# Criar um arquivo de configuração do sequelize
.sequelizerc -> config das pastas

# Criar arquivo de inicialização do sequelize
npx sequelize-cli init --force

# Criar migrations
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password_hash:string

# Rodar migrations
npx sequelize-cli db:migrate

# Criar seed demo user 
npx sequelize-cli seed:generate --name demo-user

# Rodar o seed
npx sequelize-cli db:seed:all