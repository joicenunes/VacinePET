import express from 'express';
import { createPet, getAllPets, getPetById, updatePet } from '../controllers/petController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateToken, getAllPets);
router.get('/:id', authenticateToken, getPetById);
router.post('/', authenticateToken, createPet);
router.post('/:id', authenticateToken, updatePet);

export default router;
