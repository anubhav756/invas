import express from 'express';
import AgentsController from '../controllers/AgentsController';

const router = express.Router();

router.get('/:id', AgentsController.getAgent);

export default router;
