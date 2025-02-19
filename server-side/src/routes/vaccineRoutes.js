import express from 'express';
import { createVaccine, deleteVaccine, getAllVaccines } from '../controllers/vaccineController.js';

const router = express.Router();

router.get('/', getAllVaccines);
router.post('/', createVaccine);

export default router;
