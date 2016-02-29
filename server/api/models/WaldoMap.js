import mongoose from 'mongoose';

const waldoMapSchema = mongoose.Schema({
  mapName: { type: String },
  mapWidth: { type: Number },
  mapHeight: { type: Number }
});

export default mongoose.model('WaldoMap', waldoMapSchema);
