import { sanitizeInput } from '../utils/sqlSanitizeInput.js';

const common = ['status'];

const validKeys = {
  assign: [...common, 'pet_id', 'vaccine_id', 'applied_in'],
  create: [...common, 'pet_id', 'vaccine_id'],
  update: [...common, 'applied_in', 'next_application']
};

/**
   * Valida o objeto para conter apenas dados que realmente podem ser utilizados para cada query.
   * @param {Object} vaccineData - Dados da vacina.
   * @param {string} queryType - Tipo de query (create ou update).
   * @returns {Object} - Objeto válido.
   */
export const sanitizePetVaccineData = (vaccineData, queryType) => {
  vaccineData = sanitizeInput(vaccineData);
  const sanitizedData = {};

  for (const [key, value] of Object.entries(vaccineData)) {
    if (validKeys[queryType].includes(key)) {
      sanitizedData[key] = value;
    }
  }

  return sanitizedData;
}
