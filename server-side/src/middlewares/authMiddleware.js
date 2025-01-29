import jwt from 'jsonwebtoken';
import { invalidTokens } from "../routes/auth";

export const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || invalidTokens.has(token)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Token inválido' });
    req.user = decoded;
    next();
  });
};
