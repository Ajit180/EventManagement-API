import express from 'express'
import eventRouter from './eventRouter.js'
import userRouter from './userRouter.js'


const router = express.Router();

router.use('/event',eventRouter);
router.use('/user',userRouter);

export default router;
