import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
  livros: String,
})

const filosofoSchema = new mongoose.Schema({
  nome: String,
  nascimento: String,
  correntes: [String],
  premios: String,
  descriptions: [descriptionSchema]
});

const Filosofo = mongoose.model("Filosofo", filosofoSchema);

export default Filosofo;