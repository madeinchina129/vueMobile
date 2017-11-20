var connection = require("./mysqlCollection.js");

//=====================

var  sql = 'SELECT * FROM goods';

function findSql(cb) {
    connection.query(sql, cb);
}

module.exports={
    findSql:findSql

};