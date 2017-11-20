var userModel = require("./mongooseGoods");
var mongooseVideo = require("./mongooseVideo");
//================================

// collectName  数据库集合的名字
// obj  要上传到数据库的json对象
// num  选择 增 删 改 查 方式
// cb   回调函数

function mongoTest(collectName,obj,num,cb){

    let user = null;

    if(collectName=="goods"){
        user = userModel;
    }else if(collectName=="video"){
        user = mongooseVideo;
    }

    if(num==1){
        //添加
            var user1 = new user(obj);
            user1.save(cb);
    }

    if(num==2){
        //查询所有
            user.find().exec(cb)
    }
}

// 删除
function del() {
    userModel.remove({"goodName":"wt"}).exec((error,result)=>{
        console.log(result);
    })
}

//更新数据
function update() {
    userModel.update({"goodName":"wt"},{$set:{"pic":"hhh"}}).exec((error,result)=>{
        console.log(result);
    })
}

//查询
function findbyNum() {
    userModel.find({"goodName":"wt"}).exec((err,results)=>{
        console.log(results);
    })
}

//分页查询: skip((pageIndex-1)*pageSize) limit(pageSize)
function findByPager(pageIndex,pageSize) {
    userModel.find().skip((pageIndex-1)*pageSize).limit(pageSize).exec((err,results)=>{
        console.log(results);
    })
}

module.exports = {
    MongoTest:mongoTest
}