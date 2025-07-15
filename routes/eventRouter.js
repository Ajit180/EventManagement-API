import express from 'express'
import { cancelRegistrationController, createEventController, getAllEventController, registerUserController } from '../controller/createEventController.js';


const router = express.Router();

router.post('/create',createEventController);
router.get('/getall',getAllEventController);
router.post('/:EventId/register',registerUserController);
router.post('/:EventId/cancel',cancelRegistrationController);


export default router;