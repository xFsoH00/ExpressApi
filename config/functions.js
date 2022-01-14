const axios = require('axios')
const { webhook , webhook2 } = require('./const')

// * Funções de exemplo para webhooks com o discord
// * Links dos webhooks devem ser registrados no arquivos const.js

// const url = webhook
const url = webhook2

module.exports = {
    suspicios: function(log){ 
        var info = {
            "content": "",
            "tts": false,
            "embeds": [
                {
                "type": "rich",
                "author": {
                    "name": `⚠️ Atividade suspeita - API`,
                },
                "description": `Alguem tentou burlar nosso sistema de verificação.`,
                "color": 0x2f3136,
                "fields": [
                    {
                      "name": `Headers`,
                      "value": JSON.stringify(log)
                    }
                  ]
                }
            ]
        }

        axios.post(url, info)
    },
    suspicios1: function(log){ 
        var info = {
            "content": "",
            "tts": false,
            "embeds": [
                {
                "type": "rich",
                "author": {
                    "name": `⚠️ Atividade suspeita - Autenticação Script`,
                },
                "description": `Script executado com ip não autorizado.`,
                "color": 0x2f3136,
                "fields": [
                    {
                      "name": `Headers`,
                      "value": JSON.stringify(log)
                    }
                  ]
                }
            ]
        }

        axios.post(url, info)
    },
    createLisense: function(id){
        var info = {
            "content": "",
            "tts": false,
            "embeds": [
                {
                "type": "rich",
                "author": {
                    "name": `✅ Sucesso`,
                },
                "description": `Licença para o usuário <@`+id+`> **criada** com sucesso.`,
                "color": 0x2f3136,
                }
            ]
        }

        axios.post(url, info)
    },
    deleteLisense: function(id){
        var info = {
            "content": "",
            "tts": false,
            "embeds": [
                {
                "type": "rich",
                "author": {
                    "name": `✅ Sucesso`,
                },
                "description": `Licença do usuário <@`+id+`> **deletada** com sucesso.`,
                "color": 0x2f3136,
                }
            ]
        }

        axios.post(url, info)
    },
    changeIp: function(id){
        var info = {
            "content": "",
            "tts": false,
            "embeds": [
                {
                "type": "rich",
                "author": {
                    "name": `✅ Sucesso`,
                },
                "description": `Ip **alterado** com sucesso para a licença do usuário: <@`+id+`>.`,
                "color": 0x2f3136,
                }
            ]
        }

        axios.post(url, info)
    },
    start: function(){
        var info = {
            "content": "",
            "tts": false,
            "embeds": [
                {
                "type": "rich",
                "author": {
                    "name": `✅ Conexão estabelecida...`,
                },
                "description": `O servidor da **API** está online e operante.`,
                "color": 0x2f3136,
                }
            ]
        }

        axios.post(url, info)
    },
}