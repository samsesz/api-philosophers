import express from "express";
import mongoose from "mongoose";
const app = express();
// Importando para ser criado no banco 
import Filosofo from "./models/Filosofos.js"
//importando as rotas de games
import filosofoRoutes from "./routes/filosofoRoutes.js";

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', gameRoutes);

// Iniciando a conexão com o banco de dados do MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-filosofos")

// Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}.`);
}); 