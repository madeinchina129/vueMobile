
const mongoose = require("./mongooseDburl");

//===========================

//建立骨架
var Schema = mongoose.Schema;

//数据的对于结构
var userSchema = new Schema({
    "name":{type:String},
    "price":{type:Number}
});

// 与数据库的collection绑定
var mongooseVideo = mongoose.model("videos",userSchema);

module.exports = mongooseVideo;
