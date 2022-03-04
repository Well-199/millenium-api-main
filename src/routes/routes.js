const express = require("express")
const router = express.Router()

const AnnoucementController = require('../controllers/announcement-controller') 

router.get('/', AnnoucementController.uploadAnnoucement)

module.exports = router