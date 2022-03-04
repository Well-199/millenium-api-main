const Annoucement = require('../services/announcement')

const AnnoucementController = {

    async uploadAnnoucement (req, res){

        res.status(200).json("success")
    }

}

module.exports = AnnoucementController