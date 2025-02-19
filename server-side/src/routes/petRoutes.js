import express from 'express';
import { createPet, getAllPets, getPetById, updatePet, deletePet } from '../controllers/petController.js';
import { assignVaccination } from '../controllers/petVaccinationController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateToken, getAllPets);
router.get('/:id', authenticateToken, getPetById);
router.post('/', authenticateToken, createPet);
router.put('/:id', authenticateToken, updatePet);
router.post('/:id/add-vaccine', authenticateToken, assignVaccination);
// router.post('/:id/edit-vaccine', authenticateToken, editVaccine);
// router.post('/:id/add-medical-history', authenticateToken, addMedicalHistory);
router.delete('/:id', authenticateToken, deletePet);

export default router;
