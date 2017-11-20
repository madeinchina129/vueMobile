var mysql = require('mysql');
var pool = mysql.createPool({
    host     : 'localhost',       //主机
    user     : 'root',               //MySQL认证用户名
    password : '123456',        //MySQL认证用户密码
    port: '3306',                   //端口号
    database: 'xjkcShop',
});
pool.getConnection(function(err,connection) {
    if(err) {
        console.log("建立连接失败");
    }else{

        connection.query('select * from goodsInfo',function(err,rows) {
            if(err) {
                console.log("查询失败");
            }else{

            }
            //connection.destroy();

        });
    }
    pool.end();
})