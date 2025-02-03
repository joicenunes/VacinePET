import express from 'express';
import { authenticateToken } from '../middlewares/authMiddleware.js';
import { getAllUsers, createUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.delete('/:id', authenticateToken, deleteUser);

export default router;
