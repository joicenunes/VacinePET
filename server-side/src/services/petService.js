import { sanitizeInput } from '../utils/sqlSanitizeInput.js';

const common = ['name', 'species', 'breed', 'birthday', 'weight', 'description'];

const validKeys = {
  create: [...common, 'owner'],
  update: [...common]
};

/**
   * Valida o objeto para conter apenas dados que realmente podem ser utilizados para cada query.
   * @param {Object} petData - Dados do pet.
   * @param {string} queryType - Tipo de query (create ou update).
   * @returns {Object} - Objeto válido.
   */
export const sanitizePetData = (petData, queryType) => {
  petData = sanitizeInput(petData);
  const sanitizedData = {};

  for (const [key, value] of Object.entries(petData)) {
    if (validKeys[queryType].includes(key)) {
      sanitizedData[key] = value;
    }
  }

  return sanitizedData;
}
