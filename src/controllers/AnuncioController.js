const Anuncio = require('../models/Anuncio')
const Usuario = require('../models/Usuario')
const { v4: uuid } = require('uuid')
const jimp = require('jimp')

const addImage = async (buffer) => {
    // adiciona um id aleatorio ao nome da imagem
    let nomeImagem = `${uuid()}.jpg`
    // Faz a leitura do buffer
    let tmpImg = await jimp.read(buffer)
    // Diminui a imagem altera a qualidade e salva na pasta images com uuid
    tmpImg.cover(570, 352).quality(80).write(`./public/images/${nomeImagem}`)
    // retorna o nome da imagem para ser armazenado no banco
    return nomeImagem
} 

const AnuncioController = {

    async addAction (req, res){

        let titulo = req.body.titulo
        let descricao = req.body.descricao
        let valor = req.body.valor
        let token = req.body.token

        if(!token){
            res.json({result: 'Token não enviado'})
            return
        }

        const user = await Usuario.findOne({token: token}).exec()

        if(!user){
            res.json({result: 'Usuario não encontrado/ID invalido'})
            return
        }

        if(!titulo || !descricao || !valor){
            res.json({result: 'Preencha todos os Campos'})
            return
        }

        valor = valor.replace('.', '').replace(',', '.')

        const novoAnuncio = new Anuncio()
        novoAnuncio.status = 'ativo'
        novoAnuncio.usuario_id = user._id
        novoAnuncio.titulo = titulo
        novoAnuncio.descricao = descricao
        novoAnuncio.valor = valor
        novoAnuncio.created = new Date()
        novoAnuncio.views = 0

        if(req.files && req.files.img){
            if(['image/jpeg', 'image/jpg', 'image/png'].includes(req.files.img.mimetype)){
                // manda o arquivo como parametro para ser manipulado
                // url recebe o retorno da funcao / imagem manipulada
                let url = await addImage(req.files.img.data)
            
                novoAnuncio.imagens.push(url)
            }
            else{
                // Em breve imagem padrao
                res.json({result: 'Tipo de arquivo não permitido'})
                return
            }
             
        }else{
            //imagem padrao
            novoAnuncio.imagens.push('9b02791e-cc41-4cd7-be72-dabe1584071e.jpg')
        }

        const info = await novoAnuncio.save()
        res.json({result: info._id})
    },

    async getList (req, res){

    },

    async editAction (req, res){
        
    }
}

module.exports = AnuncioController