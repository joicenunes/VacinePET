import express from 'express';
import { createPet, updatePet } from '../controllers/petController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateToken, createPet);
router.post('/:id', authenticateToken, updatePet);

export default router;
