import mongoose from "mongoose";

const planetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  overview: { content: String, source: String, image: String },
  structure: { content: String, source: String, image: String },
  geology: { content: String, source: String, image: [String] },
  rotation: String,
  revolution: String,
  radius: String,
  temperature: String,
});

const Planet = mongoose.model("Planet", planetSchema);

export default Planet;
