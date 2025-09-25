import userService from "../services/userService.js";
// Importando jwt
import jwt from 'jsonwebtoken'
// segredo para o token(é recomendado que o segredo esteja nas variaveis de ambiente)
const jwtSecret = 'apithegames'

// Importando o bcrypt (para fazer hash de senha)
import bcrypt from "bcrypt"

//Função para CADASTRAR um usuario
const createUser = async (req, res) => {
  try {
    //Coletando os dados do corpo da requisição
    const { name, email, password } = req.body;

    // VERIFICA SE O ÚSUARIO JÁ EXISTE
    const user = await userService.getOne(email);
    // SE NÃO HOUVER USUÁRIO JÁ CADASTRADO
    if(user == undefined){
      // AQUI SERÁ FEITO O HASH DE SENHA 
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)

      // cadastrando usuario
      await userService.Create(name, email, hash);
      res.status(201).json({ success: "Usuario cadastrado com sucesso" }); // cod.201 CREATED
      // 201: created
      // se o usuario ja estiver cadastrado
    } else {
      res.status(409).json({error: "Usuario informado ja cadastrado"})
      // 409: conflict
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//Função para realizar LOGIN
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Buscando o usuario pelo email
    const user = await userService.getOne(email);
    // se o usuario for encontrado
    if (user != undefined) {
      // fazendo a validação da senha (senha correta)

      // Comparando o hash de senha 
      const correct = bcrypt.compareSync(password, user.password)
      
      // se a senha for válida
      if (correct){
        // gerando o token com jwt
        jwt.sign({id: user.id, email: user.email}, jwtSecret, {expiresIn: '48h'}, (error, token) => {
          if (error) {
            res.status(400).json({error: 'Nao foi possivel gerar o token de autenticação'})
          } else {
            // token gerado com sucesso
            res.status(200).json({token})
          }
        })
        // senha incorreta
      } else {
        res.status(401).json({error: 'credenciais invalidas'}) // cod. 401: unauthorized
      }
    } else {
      res.status(404).json({ error: "Usuario nao encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default { createUser, loginUser, jwtSecret };