import express from 'express';
import createError from 'http-errors';
import agentsRouter from './agents';

const router = express.Router();

router.use('/agents', agentsRouter);

// catch 404 and forward to error handler
router.use((req, res, next) => {
  next(createError(404));
});

export default router;
