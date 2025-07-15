import express from 'express'
import { CreateUserController } from '../controller/UserController.js';

const router = express.Router();

router.post('/create',CreateUserController);

export default router;