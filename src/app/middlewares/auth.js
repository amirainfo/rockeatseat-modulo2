import jwt from 'jsonwebtoken';
import { promissify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }
  // dessestruturacao colocando a virgula descartando a posicao 0 do array e pegando só o token
  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promissify(jwt.verify)(token, authConfig.secret);
    console.log(decoded);
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
