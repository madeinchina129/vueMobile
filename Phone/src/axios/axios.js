

// let data = require("./goods.json");
//
// console.log(data);
//
// module.exports={
//   data:data
// }

//------------------------------

// let datas = "http://localhost:3000/GoodsNameApi";
// var fn =  function (cb) {
//   fetch(datas).then(response=>{
//     response.json().then(data1=>{
//       cb(data1);
//     })
//   });
// }
//
//
// module.exports = {
//   data:fn
// }

//======================

//http://localhost:3000/GoodsNameApi

import axios from "axios";
import md5 from "../assets/js/md5.js"

// let axios = require("axios");
axios.defaults.baseURL = 'http://10.35.166.8:3000/';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

var goodsfn =  function (cb) {
axios.post('GoodsNameApi')
  .then(function (response) {
    // console.log(response.data);
    cb(response.data)
  })
}

var videofn =  function (cb) {
  axios.post('video/VideoApi')
    .then(function (response) {
      // console.log(response.data);
      cb(response.data)
    })
}


//register
var registerfn =  function (dataRegister,cb) {

  axios.get("RigisterApi",{
    params:{
      "userName":dataRegister.userName,
      "passWord":md5(dataRegister.passWord)
    }
  }).then(function (response) {

      cb(response.data)
    })
}

//login
var loginfn =  function (dataLogin,cb) {

  // axios.get("LoginApi",{
  //   params:{
  //     "userName":dataLogin.userName,
  //     "passWord":dataLogin.passWord
  //   }
  // }).then(function (response) {
  //   console.log(response.data);
  //   cb(response.data)
  // })

  axios({
    method: 'post',
    url: 'LoginApi',
    params:{
      "userName":dataLogin.userName,
      "passWord":md5(dataLogin.passWord)
    }
  }).then(function (response) {

    cb(response.data);
  })
}


// import 和 module.exports不能混用
export default {
  Goodsdata:goodsfn,
  Videodata:videofn,
  Registerfn:registerfn,
  Loginfn:loginfn

}


