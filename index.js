require('dotenv').config()
const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')

const routes = require('./src/routes/routes')

const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(fileUpload())

server.use('/api', routes)

server.use((req, res) => {
    res.status(404)
    res.json({message: 'url não encontrada'})
})

server.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.BASE}`)
})