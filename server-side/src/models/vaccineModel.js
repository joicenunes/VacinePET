import supabase from '../config/supabaseClient.js';
import { sanitizeVaccineData } from '../services/vaccineService.js';

const VaccineModel = {
  /**
   * Cria um nova vacina no banco de dados.
   * @param {Object} vaccineData - Dados da vacina (name).
   * @returns {Object} - Dados do vacina criada ou um erro.
   */
  async createVaccine(vaccineData) {
    vaccineData = { ...sanitizeVaccineData(vaccineData, 'create') };

    const { data, error } = await supabase
      .from('vaccines')
      .insert(vaccineData)
      .select('id, name');

    if (error) {
      console.error('Erro ao criar vacina:', error.message);
      throw error;
    }

    return data;
  },

  /**
   * Busca uma vacina pelo ID.
   * @param {Object} filter - Filtro dinâmico com colunas e valores para comparação.
   * @returns {Object} - Dados da vacina ou um erro.
   */
  async getVaccineByDynamicFilter(filter) {
    let queryBuilder = supabase
      .from('vaccines')
      .select('*');
    
    for (const [column, value] of Object.entries(filter)) {
      query = query.eq(column, value);
    }

    const { data, error } = await queryBuilder.single();

    if (error) {
      console.error('Erro ao buscar vacina:', error.message, " Filtros: ", JSON.stringify(filter));
      throw 'Erro ao buscar vacina.';
    }

    return data;
  },

  /**
   * Busca todas as vacinas pelo id da vacina.
   * @param {number} name - Id do vacina.
   * @returns {Object} - Dados da vacina ou um erro.
   */
  getAllVaccines: async (owner) => {
    const { data, error } = await supabase
      .from('vaccines')
      .select('name)
      .eq('id', name);

    if (error) {
      console.error('Erro ao buscar vacina:', error.message);
      throw 'Erro ao buscar vacinas.';
    }

    return data;
  },

  /**
   * Edita uma vacina no banco de dados.
   * @param {Object} vaccineData - Dados editaveis da vacina (name).
   * @returns {Object} - Id da vacina editada ou um erro.
   */
  async updateVaccine(vaccineData) {
    vaccineData = { ...sanitizeVacineData(vaccineData, 'update') };

    const { error } = await supabase
      .from('vaccines')
      .update(vaccineData)
      .eq('id', vaccineData.id)
      .eq('name', vaccineData.name);

    if (error) {
      console.error('Erro ao editar a vacina:', error.message);
      throw error;
    };

    return true;
  }
}

export default VaccineModel;