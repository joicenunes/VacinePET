import supabase from '../config/supabaseClient.js';

const PetModel = {
  /**
   * Cria um novo pet no banco de dados.
   * @param {Object} petData - Dados do pet (name,
        species,
        owner_id,
        breed,
        birthday,
        weight,
        description,
        gender).
   * @returns {Object} - Dados do pet criado ou um erro.
   */
  async createPet(petData) {
    const { name, species, owner, breed, birthday, weight, description, gender } = petData;
    const { data, error } = await supabase
      .from('pets')
      .insert({
        name,
        species,
        owner,
        breed,
        birthday,
        weight,
        description,
        gender
      })
      .select('id, name');

    if (error) {
      console.error('Erro ao criar pet:', error.message);
      throw error;
    }

    return data;
  },
};

export default PetModel;
