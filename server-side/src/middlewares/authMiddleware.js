import jwt from 'jsonwebtoken';
import { invalidTokens } from '../controllers/authController.js';

export const authenticateToken = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  const token = bearerToken?.split(' ')[1];
  if (!bearerToken || invalidTokens.has(token)) {
    return res.status(401).json({ error: 'Não autorizado' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido' });
  }
};
