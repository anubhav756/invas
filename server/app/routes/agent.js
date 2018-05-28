import express from 'express';
import AgentController from '../controllers/AgentController';

const router = express.Router();

router.get('/', AgentController.getAgent);

export default router;
