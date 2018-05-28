import express from 'express';
import agentRouter from './agent';

const router = express.Router();

router.use('/agent', agentRouter);

export default router;
