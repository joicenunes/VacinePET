import PetModel from '../models/petModel.js';

export const createPet = async (req, res) => {
  const owner = req.user.id;

  try {
    const pet = await PetModel.createPet({ ...req.body, owner });

    res.status(201).json({ message: 'Pet criado com sucesso!', pet });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
