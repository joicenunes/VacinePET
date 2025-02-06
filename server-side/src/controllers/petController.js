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

export const getPetById = async (req, res) => {
  const owner = req.user.id;

  try {
    const pet = await PetModel.getPetByDynamicFilter({
      id: req.params.id,
      owner
    });

    res.status(200).json(pet);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar pet.' });
  }
};

export const getAllPets = async (req, res) => {
  const owner = req.user.id;

  try {
    const pets = await PetModel.getAllPets(owner);

    res.status(200).json(pets);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar pets.' });
  }
}

export const updatePet = async (req, res) => {
  const owner = req.user.id;
  const { id } = req.params;

  try {
    const petFound = await PetModel.getPetByDynamicFilter({
      id,
      owner,
    });

    await PetModel.updatePet({ ...req.body, owner });

    res.status(201).json({ message: 'Pet editado com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: "Erro ao editar pet." });
  }
};

export const deletePet = async (req, res) => {
  const owner = req.user.id;
  const { id } = req.params;

  try {
    const petFound = await PetModel.getPetByDynamicFilter({ id, owner });
    if (!petFound) {
      return res.status(403).json({ error: 'Ação não permitida!' });
    }

    await PetModel.deletePet(id);
    res.status(204).end();
  } catch(error) {
    return res.status(403).json({ error: 'Ação não permitida!' });
  }
};
