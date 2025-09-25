import express from 'express';
const filosofoRoutes = express.Router();
import filosofoController from '../controllers/filosofoController.js';
// Importando o Middleware
import Auth from '../middleware/Auth.js'

// A camada de routes sera responsavel por conter os ENDPOINTS da API 

// ENDPOINT para LISTAR
filosofoRoutes.get("/filosofos", Auth.Authorization,filosofoController.getAllfilosofos);

//ENDPOINT para CADASTRAR
filosofoRoutes.post("/filosofos", Auth.Authorization,filosofoController.createFilosofo);

//ENDPOINT para DELETAR
filosofoRoutes.delete("/filosofos/:id", Auth.Authorization,filosofoController.deleteFilosofo);

//ENDPOINT para ALTERAR
filosofoRoutes.put("/filosofos/:id", Auth.Authorization,filosofoController.updateFilosofo);

//ENDPOINT para LISTAR UM UNICO JOGO
filosofoRoutes.get("/filosofo/:id", Auth.Authorization,filosofoController.getOneFilosofo);

export default filosofoRoutes;