const express = require("express")
const router = express.Router()

const AuthController = require('../controllers/AuthController')
const UsuarioController = require('../controllers/UsuarioController')
const AnuncioController =  require('../controllers/AnuncioController')

router.post('/user/signin', AuthController.signin)

router.post('/anuncio/add', AnuncioController.addAction)
router.get('/ad/list', AnuncioController.getList)
router.post('/ad/:id', AnuncioController.editAction)

module.exports = router