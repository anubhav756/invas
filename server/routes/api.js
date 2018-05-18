import express from 'express';
const router = express.Router();

router.get('', (req, res, next) => {
  const cities = [
    {name: 'New York City', population: 8175133},
    {name: 'Los Angeles',   population: 3792621},
    {name: 'Chicago',       population: 2695598}
  ]
  res.json(cities)
});

export default router;
