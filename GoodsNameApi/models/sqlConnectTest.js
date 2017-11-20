var mysql  = require('mysql');  //调用MySQL模块

//创建一个connection
var connection = mysql.createConnection({
    host     : 'localhost',       //主机
    user     : 'root',               //MySQL认证用户名
    password : '123456',        //MySQL认证用户密码
    port: '3306',                   //端口号
    database: 'xjkcShop',
});
//创建一个connection
connection.connect(function(err){
    if(err){

        return;
    }

});
//执行SQL语句
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) {

        return;
    }

});
//关闭connection
connection.end(function(err){
    if(err){
        return;
    }

});