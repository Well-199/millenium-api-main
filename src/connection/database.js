const { Client } = require('pg')

const connection = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    dialect: 'postgres',
    dialectOptions: {
    useUTC: false,
    },
    timezone: '-03:00',
})

connection.connect((error) => {
    if(error) throw error;
    console.log(`Database ${process.env.DB_NAME} successfully connected`)
})

module.exports = connection