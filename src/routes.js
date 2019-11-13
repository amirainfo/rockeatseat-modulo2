// const  { Router } = require('express');

import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
/*  import User from './app/models/User'; */

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

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
