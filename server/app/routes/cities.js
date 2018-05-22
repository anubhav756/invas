import express from 'express';
import City from '../models/City';

const router = express.Router();

router.get('/', (req, res, next) => {
  City.find({}, (err, docs) => {
    if (err) throw err;

    res.json(docs);
  });
});

export default router;
