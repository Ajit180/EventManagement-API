import express from 'express'
import { createEventController, getAllEventController, registerUserController } from '../controller/createEventController.js';


const router = express.Router();

router.post('/create',createEventController);
router.get('/getall',getAllEventController);
router.post('/:EventId/register',registerUserController);


export default router;