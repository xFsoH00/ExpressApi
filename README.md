# Base para API em Express


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Base configurada com exemplos de endpoint e rotas, assim facilitando o entendimento.

## Ferramentas usadas
- Firebase
- Node.js
- Express

## Funções

- Rotas de teste, retornando o status do servidor
- Endpoint com o custom search da Google (API), retornando uma imagem
- Endpoint com webhook integrado com o discord



## Instalação

Está base necessita de [Node.js](https://nodejs.org/) v17+ para funcionar.

### Instalando todas as dependências e startando o servidor.

```sh
npm i
npm run dev
```



Para a produção...

```sh
npm i
npm run start
```

#### Importante
Lembre-se de colocar todas as variaveis necessárias, localizadas nos arquivos .env, .firebaseserc, const.js\n
Leia os comentários para melhor entendimento, e caso precise usar o banco de dados se atente ao arquivo db.js\n
Caso queira usar o Custom Search da Google, lembre-se de ativar a sua própria API no Google Cloud


#### Buildando para a produção



```sh
npm run build
```



## Licença

MIT
