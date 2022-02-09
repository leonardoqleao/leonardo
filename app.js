const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'185.211.7.1',
    port: '3306',
    user: 'u578105905_leonardo2',
    password: 'LUaAul.3',
    database: 'u578105905_leonardo2',
})
connection.connect(function(err){
    if (err){
        console.error('error connecting: '+ err.stack);
        return
    }
    console.log('connected as id ' + connection.threadId);
});
connection.query('SELECT * FROM formlql', function(err, rows, fields){
    if(!err){
        console.log('resultado: ', rows);
    }else{
        console.log('Erro ao realizar consulta');
    }
})