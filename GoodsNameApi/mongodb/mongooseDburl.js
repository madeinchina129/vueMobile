
const mongoose = require("mongoose");

//要链接的地址
let dburl = "mongodb://localhost:27017/goods";

//建立连接
mongoose.connect(dburl);

//测试是否建立成功
mongoose.connection.on("connected",()=>{
    console.log(dburl+ '${dburl}:连接成功！')
})


module.exports = mongoose;