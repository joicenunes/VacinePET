import UserModel from '../models/userModel.js';
import { sendConfirmationEmail } from '../services/mailService.js';

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await UserModel.createUser({ name, email, password });
    
    await sendConfirmationEmail(email, name);
    res.status(201).json({ message: 'Usuário criado com sucesso!', user });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar usuário.' });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.getUserById(id);
    if (!user) return res.status(403).json({ message: 'Ação não permitida!' });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar usuário.' });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar usuários.' });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    if(req.user.id !== Number(id)) {
      console.error('Divergência de ID:', req.user.id, id);
      return res.status(403).json({ message: 'Ação não permitida!' });
    }

    await UserModel.deleteUser(id);

    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar usuário." });
  }
}
