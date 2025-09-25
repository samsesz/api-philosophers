import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
  ideias: String,
})

const filosofoSchema = new mongoose.Schema({
  title: String,
  year: String,
  corrente: String,
  descriptions: descriptionSchema
});

const Filosofo = mongoose.model("Filosofo", filosofoSchema);

export default Filosofo;