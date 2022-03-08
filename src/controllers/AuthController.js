const Usuario = require('../models/Usuario')
const bcrypt = require ('bcrypt')

const AuthController = {

    async signin (req, res){

        let email = req.body.email
        let senha = req.body.senha

        if(!email){
            res.json({result: 'E-mail não enviado'})
            return
        }

        if(!senha){
            res.json({result: 'Senha não enviado'})
            return
        }

        const user = await Usuario.findOne({email: email})

        if(!user){
            res.json({result: 'E-mail/senha invalido'})
            return
        }

        //validando a senha
        const match = await bcrypt.compare(senha, user.passwordHash)

        if(!match){
            res.json({result: 'E-mail/senha invalido'})
            return
        }

        // Gera um token aleatório necessario para criar uma sessão 
        const payload = (Date.now() + Math.random()).toString()
        const token = await bcrypt.hash(payload, 10)

        user.token = token
        await user.save()

        res.json({result: token})
    },
    
}

module.exports = AuthController