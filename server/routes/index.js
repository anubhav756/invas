import express from 'express';
import citiesRouter from './cities';

const router = express.Router();

router.use('/cities', citiesRouter);

export default router;
