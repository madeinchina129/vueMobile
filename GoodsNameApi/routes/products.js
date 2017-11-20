var express = require('express');
var router = express.Router();
var goodsOperation = require('../models/goodsOperation');
/*
var mySqlPool = require("../models/mySqlconfig");
function findbyNumpro(sql,cb) {
    mySqlPool.getConnection(function (err, connection) {
        if (err) {
            console.log("建立连接失败");
        } else {
            console.log("建立连接成功");
            console.log(mySqlPool._allConnections.length);//1
            connection.query(sql, cb);

        }
        mySqlPool.end();
    });
};
*/


var a;
goodsOperation.FindByNum("select * from markets where shopName = '虚拟礼品'",function (err1, rows1) {
    /*'".$vipName.",'["虚拟礼品"],*/

    if (err1) {
        console.log("查询失败");
    } else {

        a = rows1;

    }
    //connection.destroy();
});

var b;
goodsOperation.FindByNum("select * from markets where shopName = '大家都在兑'",function (err2, rows2) {

    if (err2) {
        console.log("查询失败");
    } else {

        b = rows2;
    }
    //connection.destroy();
});

var c;
goodsOperation.FindByNum("select * from markets where RL = 'left'",function (err2, rows2) {

    if (err2) {
        console.log("查询失败");
    } else {

        c = rows2;
    }
    //connection.destroy();
});
var d;
goodsOperation.FindByNum("select * from markets where RL = 'right'",function (err2, rows2) {

    if (err2) {
        console.log("查询失败");
    } else {

        d = rows2;
    }
    //connection.destroy();
});
var e;
goodsOperation.FindByNum("select eggTotleNum from user where userName = 'markJan'",function (err2, rows2) {

    if (err2) {
        console.log("查询失败");
    } else {

        e = rows2;
    }
    //connection.destroy();
});

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'products title' });
});

router.get("/ProductsGiftApi", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Content-Type", "text/html;charset=utf-8");
    /*res.send(JSON.stringify (a));*/

    res.jsonp(a)

});

router.get("/ProductsIntegalApi", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Content-Type", "text/html;charset=utf-8");
    /*res.send(JSON.stringify (a));*/

    res.jsonp(b)
});

router.get("/ObjectiveListLeftApi", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Content-Type", "text/html;charset=utf-8");
    /*res.send(JSON.stringify (a));*/

    res.jsonp(c)
});

router.get("/ObjectiveListRightApi", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Content-Type", "text/html;charset=utf-8");
    /*res.send(JSON.stringify (a));*/

    res.jsonp(d)
});
router.get("/EggTotleNumApi", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Content-Type", "text/html;charset=utf-8");
    /*res.send(JSON.stringify (a));*/

    res.jsonp(e)
});
// eggTotleNumApi
router.get("/AddCartApi", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  res.header("Content-Type", "text/html;charset=utf-8");
  /*res.send(JSON.stringify (a));*/
  // console.log("添加")
  var aaa = req.query.goodsName;
  var bbb = req.query.price;
  var ccc = req.query.goodsImg;
  var ddd = req.query.vipNum;
  /*console.log(aaa)
  console.log(bbb)*/


  goodsOperation.Add("INSERT INTO cart(goodsId,goodsName,price,vipName,shopName,pic,qal) VALUES(0,?,?,?,?,?,?)",[aaa, bbb,ddd,,ccc,1],function (err, rows) {
    if (err) {
      console.log("添加失败");
    } else {
      console.log(rows);
      // F = rows;
    }
    //connection.destroy();

  });
});

module.exports = router;
