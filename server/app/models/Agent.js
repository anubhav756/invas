import mongoose, { Schema } from 'mongoose';

const AgentSchema = new Schema({
  name: String,
  designation: String,
  region: String,
});

export default mongoose.model('agents', AgentSchema);
