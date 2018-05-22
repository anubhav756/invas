import mongoose, { Schema } from 'mongoose';

const CitySchema = new Schema({
  name: String,
  population: Number,
});

export default mongoose.model('cities', CitySchema);
