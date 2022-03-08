const Usuario = require('../models/Usuario')

const Auth = {

    async private (req, res, next) {

        if(!req.query.token && !req.body.token){
            res.json({result: 'Token não enviado'})
            return
        }

        let token = ''
        if(req.query.token){
            token = req.query.token
        }
        if(req.body.token){
            token = req.body.token
        }

        if(token == ''){
            res.json({result: 'Token invalido'})
            return
        }

        // busca o usuario pelo token
        const user = await Usuario.findOne({token:token})

        if(!user){
            res.json({result: 'Usuario não encontrado'})
            return
        }

        next()
    }
}

module.exports = Auth