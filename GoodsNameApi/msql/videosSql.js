var connection = require("./mysqlCollection.js");

//=====================

var  sql = 'SELECT * FROM videos';

function findSql(cb) {
    connection.query(sql, cb);
}

module.exports={
    findSql:findSql
};