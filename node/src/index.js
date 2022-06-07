'use strict';
const express = require('express')
const app = express()
const PORT = 3000
const HOST = '0.0.0.0'
const config = { 
    host: 'mysql', 
    user: 'root',
    password: 'root',
    database: 'desafiodb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
    const sql = 'SELECT name FROM people';
    connection.query(sql, function (error, rows, fields) {
        if (error) throw error;

        let html = '<h1>Full Cycle</h1>';
        rows.forEach((row) => {
            html = html + '<p>' + row.name + '</p>';
        });
        
        res.send(html);
    });
})

app.listen(PORT, HOST, () => {
  console.log(`Rodando na porta ${PORT}`)
})