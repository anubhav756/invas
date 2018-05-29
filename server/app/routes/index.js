import express from 'express';
import createError from 'http-errors';
import agentRouter from './agent';

const router = express.Router();

router.use('/agent', agentRouter);

// catch 404 and forward to error handler
router.use((req, res, next) => {
  next(createError(404));
});

export default router;
