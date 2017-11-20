var mysql  = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',       //主机
    user     : 'root',               //MySQL认证用户名
    password : '123456',        //MySQL认证用户密码
    port: '3306',                   //端口号
    database: 'xjkcShop',
});

connection.connect();

add();
function add(){
var  addSql = 'INSERT INTO goodsInfo(goodsId,title,price,pic,qal) VALUES(0,?,?,?,?)';
var  addSql_Params = ['妮朵雅2017春夏季新款韩版修身中长款', 200,'assets/93b92.jpg',1];
/*{"title":"日着原创设计女装 拼接网纱连衣裙","price":300,"pic":"project/xmTest/xmtest002/src/assets/images/iphone.jpg","qal":1},
       {"title":"妮朵雅2017春夏季新款韩版修身中长款","price":200,"pic":"assets/93b92.jpg","qal":1},
       {"title":"Tianan2017夏季新款韩版短袖宽松中长款","price":400,"pic":"assets/a13.jpg","qal":1},
       {"title":"伶婉2017春装新款韩版修身显瘦春夏季雪","price":600,"pic":"assets/b358.jpg","qal":1},
       {"title":"SexeMara连衣裙2017春夏季新款女装韩","price":100,"pic":"assets/e2.jpg","qal":1},
       {"title":"韩都衣舍2017韩版女装夏装新款宽松显瘦","price":800,"pic":"assets/e54.jpg","qal":1}*/
//增
connection.query(addSql,addSql_Params,function (err, result) {
    if(err){

        return;
    }

    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);
    console.log('INSERT ID:',result);
    console.log('-----------------------------------------------------------------\n\n');
});
}
connection.end();