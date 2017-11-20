var express = require('express');
var router = express.Router();
// var mongooseActive = require("../mongodb/mongooseActive")

var mysqlCollection = require("../msql/videosSql.js");


/* GET users listing. */

router.get('/', function(req, res, next) {
    res.render('video', { title: 'Express' });
});

let datas=null;
// mongooseActive.MongoTest("video","www",2,(err,results)=>{
//     // console.log(results);
//     datas = results;
// });


function test() {
    mysqlCollection.findSql((err,result)=> {
        datas = result;
    })

}
test();



router.post("/VideoApi",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')

    res.jsonp(datas);

});
module.exports = router;
