import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CitySchema = new Schema({
  name: String,
  population: Number,
});

export default mongoose.model('cities', CitySchema);
