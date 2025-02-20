import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel.js';

const JWT_SECRET = process.env.JWT_SECRET;

export const authenticateUser = async (email, password) => {
  try {
    const errorMessage = 'Não foi possível realizar o login. Verifique suas credenciais e tente novamente.';

    const user = await UserModel.getUserByEmail(email);

    if (!user) {
      throw new Error(errorMessage);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error(errorMessage);
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

    return { success: true, token, name: user.name };
  } catch (error) {
    return { error: error.message };
  }
};
