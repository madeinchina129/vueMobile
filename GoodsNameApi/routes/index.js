var express = require('express');
var router = express.Router();
var mysqlCollection = require("../msql/goodsSql.js");
var usersSqlCollection = require("../msql/usersSql.js");
var goodsOperation = require('../models/goodsOperation')


// require("../fu/SendData")





let datas = null;
function test() {
    mysqlCollection.findSql((err,result)=> {
        datas = result;
    })

}
test();

router.post("/GoodsNameApi",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.jsonp(datas);
});

//register
router.get("/RigisterApi",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')

    let person = req.query;

    usersSqlCollection.AddSql(person, (err,results)=>{

         if(err==null){
             res.jsonp(1);
         }else {
             res.jsonp(0);
         }
    });
});

//login
router.post("/LoginApi",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    console.log(111)
    let person = req.query;

    usersSqlCollection.FindSql(person, (err,results)=>{

        if(results.length>0){
           let passWord = results[0].passWord;
           if(passWord == person.passWord){
               res.jsonp(1);
           }else{
               res.jsonp(0);
           }
        }else{
            res.jsonp(0);
        }
    });

});

//=====================
//m
var s=goodsOperation.FindByNum('select * from cart',function (err, rows) {
    if (err) {
        console.log("查询失败");
    } else {
        // console.log(rows);
        s = rows;
    }
    //connection.destroy();
});

router.get("/productapi", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");

    res.jsonp(s)
})


module.exports = router;
