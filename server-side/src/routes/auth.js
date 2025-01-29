import express from 'express';
import { authenticateUser } from '../auth/auth.js';

export let invalidTokens = new Set();

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const result = await authenticateUser(email, password);

  if (result.error)
    return res.status(401).json({ error: result.error });

  res.json({ message: 'Login bem-sucedido!', token: result.token });
});

router.post('/logout', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    invalidTokens.add(token);
    res.status(200).json({ message: 'Logout realizado com sucesso' });
  } else {
    res.status(400).json({ message: 'Token não fornecido' });
  }
});

export default router;
