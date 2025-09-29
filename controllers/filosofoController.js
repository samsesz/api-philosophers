import filosofoService from "../services/filosofoService.js";
import { ObjectId } from "mongodb";

// função para listar jogos
const getAllfilosofos = async (req, res) => {
  try {
    const filosofos = await filosofoService.getAll();
    // Cod. 200 (OK) requisição feita com sucesso
    res.status(200).json({ filosofos: filosofos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

//Função para CADASTRAR jogos
const createFilosofo = async (req, res) => {
  try {
    const { nome, nascimento, correntes, premios, descriptions } = req.body;
    await filosofoService.Create(nome, nascimento, correntes, premios, descriptions);
    res.sendStatus(201); // Cód 201 (CREATED) : Recurso criado
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

//Função para DELETAR jogos
const deleteFilosofo = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      await filosofoService.Delete(id);
      res.sendStatus(204); // Cód 204 (NO CONTENT): Requisição bem sucedida, mas não há conteudo para retornar
    } else {
      // Se o id não for valido
      res.status(400).json({ error: "A ID enviada é invalida" });
      // Cód 400 (BAD REQUEST) - Requisição mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
    // res.status(500).json({ error: 'Erro interno do servidor'}) -> Para enviar json junto
    // res.sendStatus(500) -> Somente o codigo de status
  }
};

//Função para ALTERAR jogos
const updateFilosofo = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { nome, nascimento, correntes, premios, descriptions } = req.body;
      const filosofo = await filosofoService.Update(id, nome, nascimento, correntes, premios, descriptions);
      res.status(200).json({filosofo}); // Cód 200 (OK)
    } else {
      res.sendStatus(400); // Cód 400 (BAD REQUEST)
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// Função de buscar um unico jogo
const getOneFilosofo = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id
      const filosofo = await filosofoService.getOne(id);
      if (!filosofo) { // if not filosofo
        res.status(404).json({ error: 'O filosofo nao foi encontrado.'}) // Not Found: Não encontrado
      } else {
        res.status(200).json({ filosofo })
      }
    } else {
      res.status(400).json({ error: 'A id enviada é invalida'}) // Bad Request: Requisição invalida
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500); // Erro interno do servidor
  }
};

export default { getAllfilosofos, createFilosofo, deleteFilosofo, updateFilosofo, getOneFilosofo };