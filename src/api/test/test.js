class Teste {
    async test(req, res, next){
        return res.status(200).send('Servidor online!');
    }
}

module.exports = new Teste();