// const  { Router } = require('express');

import { Router } from 'express';
import UserController from './app/controllers/UserController';
/*  import User from './app/models/User'; */

const routes = new Router();

routes.post('/users', UserController.store);

/* routes.get('/', (req, res) => res.json({ message: 'Hello AMIRAINFO !!' })); */

/* routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Danilo Parisotto',
    email: 'danilo@amirainfo.com.br',
    password_hash: '12345678',
  });
  return res.json(user);
}); */

// module.exports = routes;

export default routes;
