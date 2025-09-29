import express from "express";
const app = express();

import connect from "./config/db-connection.js";
// Iniciando a conexão com o banco de dados do MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/api-filosofos")

// Importando para ser criado no banco 
import Filosofos from "./models/Filosofos.js"

//importando as rotas
import filosofoRoutes from "./routes/filosofoRoutes.js"

app.get("/", (req, res) => {
  const filosofos = [
    {
      nome: "Albert Camus",
      nascimento: "07 de Novembro",
      correntes: ["Absurdismo", "Existencialismo", "Anarquismo"],
      premios: ["Nobel de Literatura"],
      descriptions: [
        { livros: "O estrangeiro, A peste, O mito de Sísifo..." }
      ]
    },
    {
      nome: "Michel Foucault",
      nascimento: "15 de Outubro",
      correntes: ["Ateísmo", "Pós-estruturalista"],
      premios: [],
      descriptions: [
        { livros: "Vigiar e Punir, A Arqueologia do Saber, História da Loucura" }
      ]
    },
    {
      nome: "Mario Sergio Cortella",
      nascimento: "05 de Março",
      correntes: ["Humanismo crítico", "Filosofia da Educação", "Ética Aplicada"],
      premios: ["Prêmio Darcy Ribeiro de Educação"],
      descriptions: [
        { livros: "Não Nascemos Prontos, A Paixão Pela Razão, A Escola E O Conhecimento" }
      ]
    },
    {
      nome: "Jacques Le Goff",
      nascimento: "01 de Janeiro",
      correntes: ["Humanismo Histórico e Cultural"],
      premios: ["Prêmio Gobert"],
      descriptions: [
        { livros: "A Civilização do Ocidente Medieval, O Imaginário Medieval, O Homem Medieval" }
      ]
    }
  ];

  res.json(filosofos);
});
// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', filosofoRoutes);

// Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}.`);
}); 