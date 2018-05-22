import City from '../models/City';

export default class CityController {
  static getAllCities(req, res) {
    City.find({}, (err, docs) => {
      if (err) throw err;

      res.json(docs);
    });
  }
}
