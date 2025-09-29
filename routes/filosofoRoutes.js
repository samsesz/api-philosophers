import express from 'express';
const filosofoRoutes = express.Router();
import filosofoController from '../controllers/filosofoController.js';
// Importando o Middleware
// import Auth from '../middleware/Auth.js'

// A camada de routes sera responsavel por conter os ENDPOINTS da API 

// ENDPOINT para LISTAR
filosofoRoutes.get("/filosofos", filosofoController.getAllfilosofos);

//ENDPOINT para CADASTRAR
filosofoRoutes.post("/filosofos", filosofoController.createFilosofo);

//ENDPOINT para DELETAR
filosofoRoutes.delete("/filosofos/:id", filosofoController.deleteFilosofo);

//ENDPOINT para ALTERAR
filosofoRoutes.put("/filosofos/:id", filosofoController.updateFilosofo);

//ENDPOINT para LISTAR UM UNICO FILOSOFO
filosofoRoutes.get("/filosofos/:id", filosofoController.getOneFilosofo);

export default filosofoRoutes;