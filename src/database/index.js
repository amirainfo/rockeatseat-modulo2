import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];
/* Configurando a classe DATABASE  */
class DataBase {
  constructor() {
    this.init();
  }

  /* conexao com a base para fazer contato com os models */
  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new DataBase();
