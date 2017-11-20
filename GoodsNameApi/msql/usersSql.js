var connection = require("./mysqlCollection.js");

//=====================



function addSql(person, cb) {

    var sql = 'insert into users(userName,passWord) values("'+person.userName+'","'+person.passWord+'")';
    connection.query(sql, cb);
}
function findSql(person, cb) {

    var sql = 'select * from users where userName="'+person.userName+'"';
    connection.query(sql, cb);
}

module.exports={
    AddSql:addSql,
    FindSql:findSql

};