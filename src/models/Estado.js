const mongoose = require('mongoose')
mongoose.Promisse = global.Promise

const modelSchema = new mongoose.Schema({
    nome: String
})

const modelName = 'Estado'

if(mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName]
} else {
    module.exports = mongoose.model(modelName, modelSchema)
}

