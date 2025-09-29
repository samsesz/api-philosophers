import Filosofo from "../models/Filosofos.js";

// O service sera responsavel por conter os metodos de manipulação do banco.

class filosofoService {
  //Buscando os registros do banco
  async getAll() {
    try {
      const filosofos = await Filosofo.find();
      return filosofos;
    } catch (error) {
      console.log(error);
    }
  }
  // Cadastrando registros no banco
  async Create(nome, nascimento, correntes, premios, descriptions) {
    try {
      const newFilosofo = new Filosofo({
        nome,
        nascimento,
        correntes,
        premios,
        descriptions
      }); 
      await newFilosofo.save();
    } catch (error) {
      console.log(error);
    }
  }

  //Deletando registros no banco
  async Delete(id) {
    try {
      await Filosofo.findByIdAndDelete(id);
      console.log(`Filosofo com a id: ${id} foi deletado com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }

  //Alterando registros no banco
  async Update(id, nome, nascimento, correntes, premios, descriptions) {
    try {
      const filosofo = await Filosofo.findByIdAndUpdate(
        id,
        {
          nome,
          nascimento,
          correntes,
          premios,
          descriptions
        },
        { new: true }
      );
      console.log(`Dados do filosofo com id ${id} alterado com sucesso.`);
      return filosofo;
    } catch (error) {
      console.log(error);
    }
  }

  async getOne(id) {
    try {
      const filosofo = await Filosofo.findOne({ _id: id });
      return filosofo;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new filosofoService();