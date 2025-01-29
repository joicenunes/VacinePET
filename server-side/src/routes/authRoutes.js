import express from 'express';
import { userLogin, userLogout } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', userLogin);
router.post('/logout', userLogout);

export default router;
