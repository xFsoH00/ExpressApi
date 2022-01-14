const { Router } = require('express');

//* Rotas, importe o aquivo depois sete a rota com o seu endpoint.
//* é possivel separar as rotas em arquivos, basta fazer o mesmo layout

const routes = new Router();
//! ----------------------------------------------------------------------
//* Rotas de testes (Pings ... etc) --------------------------------------
const Test = require('./api/test/test'); // ! Importação
routes.get("/test", Test.test); // ! Endpoint

const PingHook = require('./api/test/pinghook');
routes.get("/pinghook", PingHook.pingHook);
//! ----------------------------------------------------------------------
//* Rotas Dev --------------------------------------------------------
const Gcat = require('./api/cat/getCat');
routes.get("/catinho", Gcat.getCat);

module.exports = routes;