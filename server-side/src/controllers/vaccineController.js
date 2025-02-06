import VaccineModel from '../models/vaccineModel.js';

export const createVaccine = async (req, res) => {
  const { name } = req.body;

  try {
    const vaccine = await VaccineModel.createVaccine({ name });
    
    res.status(201).json({ message: 'Vacina criada com sucesso!', vaccine });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar Vacina.' });
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
