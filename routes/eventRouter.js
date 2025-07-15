import express from 'express'
import { cancelRegistrationController, createEventController, eventStatsController, futureEventsController, getAllEventController, registerUserController } from '../controller/EventController.js';


const router = express.Router();

router.post('/create',createEventController);
router.get('/getall',getAllEventController);
router.post('/:EventId/register',registerUserController);
router.post('/:EventId/cancel',cancelRegistrationController);
router.get('/getfuture',futureEventsController);
router.get('/:EventId/getstats',eventStatsController);


export default router;