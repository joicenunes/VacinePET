import supabase from '../config/supabaseClient.js';
import { sanitizePetData } from '../services/petService.js';

const PetModel = {
  /**
   * Cria um novo pet no banco de dados.
   * @param {Object} petData - Dados do pet (name,
        species,
        owner,
        breed,
        birthday,
        weight,
        description,
        gender).
   * @returns {Object} - Dados do pet criado ou um erro.
   */
  async createPet(petData) {
    petData = { ...sanitizePetData(petData, 'create') };

    const { data, error } = await supabase
      .from('pets')
      .insert(petData)
      .select('id, name');

    if (error) {
      console.error('Erro ao criar pet:', error.message);
      throw error;
    }

    return data;
  },

  /**
   * Busca um pet pelo ID.
   * @param {Object} filter - Filtro dinâmico com colunas e valores para comparação.
   * @returns {Object} - Dados do pet ou um erro.
   */
  async getPetByDynamicFilter(filter) {
    let queryBuilder = supabase
      .from('pets')
      .select('*');
    
    for (const [column, value] of Object.entries(filter)) {
      query = query.eq(column, value);
    }

    const { data, error } = await queryBuilder.single();

    if (error) {
      console.error('Erro ao buscar pet:', error.message, " Filtros: ", JSON.stringify(filter));
      throw 'Erro ao buscar pet.';
    }

    return data;
  },

  /**
   * Busca todos os pets pelo id do dono.
   * @param {number} owner - Id do dono para buscar os pets.
   * @returns {Object} - Dados do pet ou um erro.
   */
  getAllPets: async (owner) => {
    const { data, error } = await supabase
      .from('pets')
      .select('name, species, breed, birthday, weight')
      .eq('owner', owner);

    if (error) {
      console.error('Erro ao buscar pets:', error.message);
      throw 'Erro ao buscar pets.';
    }

    return data;
  },

  /**
   * Edita um pet no banco de dados.
   * @param {Object} petData - Dados ediáveis do pet (name,
        species,
        breed,
        birthday,
        weight,
        description,
        gender).
   * @returns {Object} - Id do pet editado ou um erro.
   */
  async updatePet(petData) {
    petData = { ...sanitizePetData(petData, 'update') };

    const { error } = await supabase
      .from('pets')
      .update(petData)
      .eq('id', petData.id)
      .eq('owner', petData.owner);

    if (error) {
      console.error('Erro ao editar o pet:', error.message);
      throw error;
    };

    return true;
  }
}

export default PetModel;
