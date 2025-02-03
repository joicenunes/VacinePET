import PetModel from '../models/petModel.js';

export const createPet = async (req, res) => {
  const owner = req.user.id;

  try {
    const pet = await PetModel.createPet({ ...req.body, owner });

    res.status(201).json({ message: 'Pet criado com sucesso!', pet });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar pet.' });
  }
};

export const updatePet = async (req, res) => {
  const owner = req.user.id;

  try {
    const petFound = await PetModel.getPetByDynamicFilter({
      id: req.params.id,
      owner,
    });

    if (!petFound) {
      return res.status(404).json({ error: 'Pet não encontrado.' });
    }

    await PetModel.updatePet({ ...req.body, owner });

    res.status(201).json({ message: 'Pet editado com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: "Erro ao editar pet." });
  }
};
