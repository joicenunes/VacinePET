import supabase from '../config/supabaseClient.js';

const MedicalHistoryModel = {
  /**
   * Cria um novo registro de histórico médico.
   * @param {Object} historyData - Dados do histórico médico
   * @returns {Object} - Dados do histórico médico criado ou um erro
   */
  async createMedicalHistory(historyData) {
    const { data, error } = await supabase
      .from('medical_history')
      .insert({
        pet_id: historyData.pet_id,
        vaccine_type: historyData.vaccine_type,
        date: historyData.date,
        status: historyData.status
      })
      .select();

    if (error) {
      console.error('Erro ao criar histórico médico:', error.message);
      throw error;
    }
    return data[0];
  },

  /**
   * Busca o histórico médico de um pet específico.
   * @param {number} petId - ID do pet
   * @returns {Array} - Lista de registros médicos do pet
   */
  async getMedicalHistoryByPetId(petId) {
    const { data, error } = await supabase
      .from('medical_history')
      .select('*')
      .eq('pet_id', petId)
      .order('date', { ascending: false });

    if (error) {
      console.error('Erro ao buscar histórico médico:', error.message);
      throw error;
    }
    return data;
  },

  /**
   * Busca um registro médico específico pelo ID.
   * @param {number} historyId - ID do registro médico
   * @returns {Object} - Dados do registro médico ou null se não encontrado
   */
  async getMedicalHistoryById(historyId) {
    const { data, error } = await supabase
      .from('medical_history')
      .select('*')
      .eq('id', historyId)
      .single();

    if (error) {
      console.error('Erro ao buscar registro médico:', error.message);
      throw error;
    }
    return data;
  },

  /**
   * Atualiza um registro médico.
   * @param {number} historyId - ID do registro médico
   * @param {Object} updates - Dados a serem atualizados
   * @returns {Object} - Dados do registro atualizado ou um erro
   */
  async updateMedicalHistory(historyId, updates) {
    const { data, error } = await supabase
      .from('medical_history')
      .update(updates)
      .eq('id', historyId)
      .select();

    if (error) {
      console.error('Erro ao atualizar registro médico:', error.message);
      throw error;
    }
    return data[0];
  },

  /**
   * Deleta um registro médico.
   * @param {number} historyId - ID do registro médico
   * @returns {boolean} - Retorna true se o registro foi deletado com sucesso
   */
  async deleteMedicalHistory(historyId) {
    const { error } = await supabase
      .from('medical_history')
      .delete()
      .eq('id', historyId);

    if (error) {
      console.error('Erro ao deletar registro médico:', error.message);
      throw error;
    }
    return true;
  },

  /**
   * Busca registros médicos por tipo de vacina.
   * @param {string} vaccineType - Tipo da vacina
   * @returns {Array} - Lista de registros médicos
   */
  async getMedicalHistoryByVaccineType(vaccineType) {
    const { data, error } = await supabase
      .from('medical_history')
      .select('*')
      .eq('vaccine_type', vaccineType)
      .order('date', { ascending: false });

    if (error) {
      console.error('Erro ao buscar registros médicos:', error.message);
      throw error;
    }
    return data;
  },

  /**
   * Busca registros médicos por status.
   * @param {string} status - Status do registro médico
   * @returns {Array} - Lista de registros médicos
   */
  async getMedicalHistoryByStatus(status) {
    const { data, error } = await supabase
      .from('medical_history')
      .select('*')
      .eq('status', status)
      .order('date', { ascending: false });

    if (error) {
      console.error('Erro ao buscar registros médicos:', error.message);
      throw error;
    }
    return data;
  },

  /**
   * Busca registros médicos por período.
   * @param {string} startDate - Data inicial
   * @param {string} endDate - Data final
   * @returns {Array} - Lista de registros médicos
   */
  async getMedicalHistoryByDateRange(startDate, endDate) {
    const { data, error } = await supabase
      .from('medical_history')
      .select('*')
      .gte('date', startDate)
      .lte('date', endDate)
      .order('date', { ascending: false });

    if (error) {
      console.error('Erro ao buscar registros médicos:', error.message);
      throw error;
    }
    return data;
  }
};

export default MedicalHistoryModel;
