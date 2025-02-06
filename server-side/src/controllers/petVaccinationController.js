import PetVaccineModel from '../models/petVaccineModel.js';

export const assignVaccination = async (req, res) => {
  const { id: pet_id } = req.params;
  const { vaccine_id, applied_in } = req.body;

  try {
    const vaccine = await PetVaccineModel.assignVaccination({ pet_id, vaccine_id, status: 1, applied_in });
    
    res.status(201).json({ message: 'Vacinação atribuída com sucesso!', vaccine });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar Vacinação.' });
  }
};

export const getAllVaccines = async (req, res) => {
  try {
    const vaccines = await VaccineModel.getAllVaccines();
    res.status(200).json(vaccines);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar Vacinas.' });
  }
};

export const deleteVaccine = async (req, res) => {
  const { id } = req.params;

  try {
    await VaccineModel.deleteVaccine(id);

    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar Vacina." });
  }
}
