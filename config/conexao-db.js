const mysql = require('mysql')

const conexao = mysql.createConnection({

    host: '54.211.98.120',
    port: 3306,
    user: 'milene',
    password: 'bcd127',
    database: 'brabank'
})

module.exports = conexao