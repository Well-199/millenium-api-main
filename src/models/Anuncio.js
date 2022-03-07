const mongoose = require('mongoose')
mongoose.Promisse = global.Promise

const modelSchema = new mongoose.Schema({
    usuario_id: String,
    estado_id: String,
    categoria_id: String,
    localizacao_id: String,
    title: String,
    descricao: String,
    imagens: [Object],
    endereco: String,
    valor: Number,
    views: Number,
    status: String,
    created: Date
})

const modelName = 'Anuncio'

if(mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName]
} else {
    module.exports = mongoose.model(modelName, modelSchema)
}

