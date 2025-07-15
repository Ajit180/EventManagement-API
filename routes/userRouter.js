import express from 'express'
import { CreateUserController } from '../controller/createUserController.js';

const router = express.Router();

router.post('/create',CreateUserController);

export default router;