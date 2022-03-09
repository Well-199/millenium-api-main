const express = require("express")
const router = express.Router()

const Auth = require('../middlewares/Auth')

const AuthController = require('../controllers/AuthController')
const UsuarioController = require('../controllers/UsuarioController')
const AnuncioController =  require('../controllers/AnuncioController')

router.post('/user/signin', AuthController.signin)

router.post('/anuncio/add', AnuncioController.addAction)
router.get('/anuncios/list', AnuncioController.getList)
router.get('/anuncios/filter', AnuncioController.adsFilter)
router.post('/anuncio/:id', AnuncioController.editAction)

module.exports = router