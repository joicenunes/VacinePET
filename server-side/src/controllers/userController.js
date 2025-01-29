import UserModel from '../models/userModel.js';

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await UserModel.createUser({ name, email, password });
    res.status(201).json({ message: 'Usuário criado com sucesso!', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
