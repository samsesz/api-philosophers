# api-philosophers
Esta API é utilizada para gerenciar um catálogo de filosofos, permitindo operações de CRUD (criar, ler, atualizar e deletar) sobre filosofos.

## Endpoints
### - GET /filosofoss
Esse endpoint é responsável por retornar a listagem de todos os filosofos cadastrados no banco de dados.

#### Parâmetros:
Nenhum

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, você vai receber a listagem de todos os filosofos.

Exemplo de resposta:

```
{
	"filosofos": [
		{
			"_id": "68d82bcdadd58cd5c98c1097",
			"nome": "Albert Camus",
			"nascimento": "07 de Novembro",
			"correntes": [
				"Absurdismo",
				"Existencialismo",
				"Anarquismo"
			],
			"premios": "Nobel de Literatura",
			"descriptions": [
				{
					"_id": "68d83a2eecdf745d08a2b126",
					"livros": "O estrangeiro, A peste, O mito de Sísifo..."
				}
			]
		},
		{
			"_id": "68d82bdaadd58cd5c98c1098",
			"nome": "Michel Foucault",
			"nascimento": "15 de Outubro",
			"correntes": [
				"Ateísmo",
				"Pós-estruturalismo"
			],
			"premios": "",
			"descriptions": [
				{
					"_id": "68d83a2eecdf745d08a2b127",
					"livros": "Vigiar e Punir, A Arqueologia do Saber, História da Loucura"
				}
			]
		},
		{
			"_id": "68d82be8add58cd5c98c1099",
			"nome": "Mario Sergio Cortella",
			"nascimento": "05 de Março",
			"correntes": [
				"Humanismo crítico",
				"Filosofia da Educação",
				"Ética Aplicada"
			],
			"premios": "Prêmio Darcy Ribeiro de Educação",
			"descriptions": [
				{
					"_id": "68d83a2eecdf745d08a2b128",
					"livros": "Não Nascemos Prontos, A Paixão Pela Razão, A Escola E O Conhecimento"
				}
			]
		}
	]
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor. Motivos podem incluir falhas na comunicação com o banco de dados.

Exemplo de resposta:

```
{
    "err": "Erro interno do servidor!"
}
```

### - POST /filosofos
Esse endpoint é responsável por cadastrar um novo jogo no banco de dados.

#### Parâmetros:
Nome: Nome do filosofo.<br>
Nascimento: Data de nascimento do filosofo.<br>
Correntes: Correntes filosoficas que o filosofo acreditava.<br>
Premios: Premios que o filosofo ganhou (opcional).<br>
Descriptions: descrição extra sobre o filosofo.<br>
Livros: obras que o filosofo escreveu.<br>

Exemplo de requisição:

```
{
  "nome": "Jacques Le Goff",
  "nascimento": "01 de Janeiro",
  "correntes": ["Humanismo Histórico e Cultural"],
  "premios": "Prêmio Gobert",
  "descriptions": [
    {
      "livros": "A Civilização do Ocidente Medieval, O Imaginário Medieval, O Homem Medieval"
    }
  ]
}
```

#### Respostas:
##### Criado! 201
Caso essa resposta aconteça, o novo filosofo foi criado com sucesso.

Exemplo de resposta: Nenhum conteúdo retornado.

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "err": "Erro interno do servidor!"
}
```


### - DELETE /filosofos/
Esse endpoint é responsável por deletar um filosofo específico pelo seu ID.

#### Parâmetros:
id: ID do filosofo a ser deletado.

#### Respostas:
##### Sem Conteúdo! 204
Caso essa resposta aconteça, o filosofo foi deletado com sucesso e não há conteúdo para retornar ao cliente.

Exemplo de resposta: Nenhum conteúdo retornado.

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "err": "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "err": "Erro interno do servidor!"
}
```

### - PUT /filosofos/
Esse endpoint é responsável por atualizar as informações de um jogo específico pelo seu ID.

#### Parâmetros:
Nome: Nome do filosofo.<br>
Nascimento: Data de nascimento do filosofo.<br>
Correntes: Correntes filosoficas que o filosofo acreditava.<br>
Premios: Premios que o filosofo ganhou (opcional).<br>
Descriptions: descrição extra sobre o filosofo.<br>
Livros: obras que o filosofo escreveu.<br>

Exemplo de requisição:

```
{
  "nome": "Jacques Le Goff 2.0",
  "nascimento": "01 de Janeiro",
  "correntes": ["Humanismo Histórico e Cultural"],
  "premios": "Prêmio Gobert",
  "descriptions": [
    {
      "livros": "A Civilização do Ocidente Medieval, O Imaginário Medieval, O Homem Medieval"
    }
  ]
}
```

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, as informações do filosofo foram atualizadas com sucesso.

Exemplo de resposta:

```
{
  "nome": "Jacques Le Goff 2.0",
  "nascimento": "01 de Janeiro",
  "correntes": ["Humanismo Histórico e Cultural"],
  "premios": "Prêmio Gobert",
  "descriptions": [
    {
      "livros": "A Civilização do Ocidente Medieval, O Imaginário Medieval, O Homem Medieval"
    }
  ]
}
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido ou a requisição contém dados malformados.

Exemplo de resposta:

```
{
    "err": "ID inválido ou dados malformados!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "err": "Erro interno do servidor!"
}
```

### - GET /filosofos/
Esse endpoint é responsável por retornar as informações de um filosofo específico pelo seu ID.

#### Parâmetros:
id: ID do filosofo a ser consultado.

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, você vai receber as informações do filosofo solicitado.

Exemplo de resposta:

```
{
	"filosofos": [
		{
			"_id": "68d82bcdadd58cd5c98c1097",
			"nome": "Albert Camus",
			"nascimento": "07 de Novembro",
			"correntes": [
				"Absurdismo",
				"Existencialismo",
				"Anarquismo"
			],
			"premios": "Nobel de Literatura",
			"descriptions": [
				{
					"_id": "68d83a2eecdf745d08a2b126",
					"livros": "O estrangeiro, A peste, O mito de Sísifo..."
				}
			]
		}
```

##### Não Encontrado! 404
Caso essa resposta aconteça, significa que o filosofo com o ID fornecido não foi encontrado.

Exemplo de resposta:

```
{
    "err": "Jogo não encontrado!"
}
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "err": "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "err": "Erro interno do servidor!"
}
```
