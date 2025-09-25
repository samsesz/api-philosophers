import express from "express";
import mongoose from "mongoose";
const app = express();
// Importando para ser criado no banco 
import Filosofos from "./models/Filosofos.js"
import Users from "./models/Users.js"
//importando as rotas
import filosofoRoutes from "./routes/filosofoRoutes.js"
import userRoutes from "./routes/userRoutes.js"

// documentação
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "./config/swagger-config.js";
import swaggerJSDoc from "swagger-jsdoc";

const swaggerDocs = swaggerJSDoc(swaggerOptions);

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', filosofoRoutes);
app.use('/', userRoutes);
// Rota para a documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Iniciando a conexão com o banco de dados do MongoDB
//mongoose.connect("mongodb://127.0.0.1:27017/api-filosofos")

// Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}.`);
}); 