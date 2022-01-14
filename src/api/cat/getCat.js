const imageSearch = require('image-search-google');

//* Função para pesquisa de imagens com a API da Google, google custom search

class GetCat {
    async getCat(req, res, next){
        const client = new imageSearch('', ''); //! Colocar o id da sua API do custom search, ativando no google cloud
        const options = {searchType: 'image'};
        let links = [];
        //!          qual imagem pesquisar
        await client.search('gato', options).then(images => {
            var body = Promise.resolve(images);
            body.then((value) => {
                value.forEach((value) => {
                    links.push(value.url);
                })
            })
            
        }).catch((e) => {
            res.sendStatus(400);
        })
        var random = parseInt(Math.random() * ((links.length + 1) - 0) + 0);
        console.log(random);
        res.status(200).send(links[random]);
    } 
}

module.exports = new GetCat();