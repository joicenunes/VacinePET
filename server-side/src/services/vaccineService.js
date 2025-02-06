import { sanitizeInput } from '../utils/sqlSanitizeInput.js';

const common = ['name'];

const validKeys = {
  create: [...common],
  update: [...common]
};

/**
   * Valida o objeto para conter apenas dados que realmente podem ser utilizados para cada query.
   * @param {Object} vaccineData - Dados da vacina.
   * @param {string} queryType - Tipo de query (create ou update).
   * @returns {Object} - Objeto válido.
   */
export const sanitizeVaccineData = (vaccineData, queryType) => {
  vaccineData = sanitizeInput(vaccineData);
  const sanitizedData = {};

  for (const [key, value] of Object.entries(vaccineData)) {
    if (validKeys[queryType].includes(key)) {
      sanitizedData[key] = value;
    }
  }

  return sanitizedData;
}
