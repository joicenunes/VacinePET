import express from 'express';
import { createPet } from '../controllers/petController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateToken, createPet);
router.post('/:id', authenticateToken, createPet);

export default router;
