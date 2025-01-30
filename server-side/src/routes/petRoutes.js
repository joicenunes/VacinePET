import express from 'express';
import { createPet } from '../controllers/petController.js';
import { authenticate } from '../auth/auth.js';

const router = express.Router();

router.post('/', authenticate, createPet);

export default router;
