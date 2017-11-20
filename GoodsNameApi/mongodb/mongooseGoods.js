
const mongoose = require("./mongooseDburl");

//===========================

//建立骨架
var Schema = mongoose.Schema;

//数据的对于结构
var userSchema = new Schema({
      "goodName":{type:String},
      "pic":{type:String}
});

// 与数据库的collection绑定
var userModel = mongoose.model("goods",userSchema);

module.exports = userModel;
