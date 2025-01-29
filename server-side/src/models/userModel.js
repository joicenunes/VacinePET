import bcrypt from 'bcrypt';
import supabase from '../config/supabaseClient.js';

const SALT_ROUNDS = 10;

const UserModel = {
  /**
   * Cria um novo usuário no banco de dados.
   * @param {Object} userData - Dados do usuário (name, email, etc.).
   * @returns {Object} - Dados do usuário criado ou um erro.
   */
  async createUser(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, SALT_ROUNDS);

    const { data, error } = await supabase
      .from('users')
      .insert({
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
      })
      .select('id, name, email');

    if (error) {
      console.error('Erro ao criar usuário:', error.message);

      if (error.message.includes(`duplicate key value violates unique constraint "users_email_key"`)) {
        error.message = 'Não foi possível concluir o cadastro. Verifique os dados informados e tente novamente.';
      }
      throw error;
    }

    return data;
  },

  /**
   * Busca um usuário pelo e-mail.
   * @param {string} userEmail - E-mail do usuário.
   * @returns {Object} - Dados do usuário ou null se não encontrado.
   */
  async getUserByEmail(userEmail) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', userEmail)
      .single(); // Retorna um único registro

    if (error) {
      console.error('Erro ao buscar usuário:', error.message);
      throw error;
    }

    return data;
  },

  /**
   * Busca um usuário pelo ID.
   * @param {number} userId - ID do usuário.
   * @returns {Object} - Dados do usuário ou null se não encontrado.
   */
  async getUserById(userId) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Erro ao buscar usuário:', error.message);
      throw error;
    }

    return data;
  },

  /**
   * Atualiza os dados de um usuário.
   * @param {number} userId - ID do usuário.
   * @param {Object} updates - Dados a serem atualizados.
   * @returns {Object} - Dados do usuário atualizado ou um erro.
   */
  async updateUser(userId, updates) {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', userId)
      .select();

    if (error) {
      console.error('Erro ao atualizar usuário:', error.message);
      throw error;
    }

    return data[0];
  },

  /**
   * Deleta um usuário pelo ID.
   * @param {number} userId - ID do usuário.
   * @returns {boolean} - Retorna true se o usuário foi deletado com sucesso.
   */
  async deleteUser(userId) {
    const { error } = await supabase.from('users').delete().eq('id', userId);

    if (error) {
      console.error('Erro ao deletar usuário:', error.message);
      throw error;
    }

    return true;
  },

  /**
   * Busca todos os usuários.
   * @returns {Array} - Lista de usuários ou um erro.
   */
  async getAllUsers() {
    const { data, error } = await supabase.from('users').select();

    if (error) {
      console.error('Erro ao buscar usuários:', error.message);
      throw error;
    }

    return data;
  },
};

export default UserModel;
