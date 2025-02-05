import supabase from '../config/supabaseClient.js';

const sanitizeVaccineData = (data, operation) => {
  const sanitized = {};
  
  if (operation === 'create' || operation === 'update') {
    if (data.name) sanitized.name = data.name.trim();
  }
  
  return sanitized;
};

const VaccineModel = {
  /**
   * Cria uma nova vacina no banco de dados.
   * @param {Object} vaccineData - Dados da vacina (name).
   * @returns {Promise<Object>} - Dados da vacina criada ou um erro.
   */
  async createVaccine(vaccineData) {
    try {
      const sanitizedData = sanitizeVaccineData(vaccineData, 'create');
      const { data, error } = await supabase
        .from('vaccines')
        .insert(sanitizedData)
        .select('id, name');

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erro ao criar vacina:', error.message);
      throw error;
    }
  },

  /**
   * Busca uma vacina usando filtros dinâmicos.
   * @param {Object} filter - Filtro dinâmico com colunas e valores para comparação.
   * @returns {Promise<Object>} - Dados da vacina ou um erro.
   */
  async getVaccineByDynamicFilter(filter) {
    try {
      let queryBuilder = supabase
        .from('vaccines')
        .select('*');

      Object.entries(filter).forEach(([column, value]) => {
        queryBuilder = queryBuilder.eq(column, value);
      });

      const { data, error } = await queryBuilder.single();
      
      if (error) {
        throw new Error(`Erro ao buscar vacina. Filtros: ${JSON.stringify(filter)}`);
      }
      return data;
    } catch (error) {
      console.error('Erro ao buscar vacina:', error.message);
      throw error;
    }
  },

  /**
   * Busca todas as vacinas.
   * @returns {Promise<Object[]>} - Lista de vacinas ou um erro.
   */
  async getAllVaccines() {
    try {
      const { data, error } = await supabase
        .from('vaccines')
        .select('id, name');

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erro ao buscar vacinas:', error.message);
      throw error;
    }
  },

  /**
   * Edita uma vacina no banco de dados.
   * @param {Object} vaccineData - Dados editáveis da vacina (name).
   * @returns {Promise<boolean>} - True se a atualização foi bem-sucedida ou lança um erro.
   */
  async updateVaccine(vaccineData) {
    try {
      const sanitizedData = sanitizeVaccineData(vaccineData, 'update');
      const { error } = await supabase
        .from('vaccines')
        .update(sanitizedData)
        .eq('id', vaccineData.id);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Erro ao editar a vacina:', error.message);
      throw error;
    }
  }
};

export default VaccineModel;