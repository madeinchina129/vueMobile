/*// import  SHOPCARTURL from "../constans/FetchApiUrl";
var appData = require('../assets/cart.json');
var getShopCartListByUser = function(cb){
  console.log(appData);
    /!*fetch(appData).then(function(response){
        response.json().then(function(data){
            cb(data)
        })
    })*!/
    console.log(appData[0]);
    cb(appData)
    // cb(1)

}
/!*export default {getShopCartListByUser};*!/
module.exports = {
  getShopCartListByUser
}*/


/*
var appData = require('http://localhost:3000/shopcartapi');
module.exports = {
  appData
}
*/


import  SHOPCARTURL from "../constans/FetchApiUrl";
var getShopCartListByUser = function(cb){
  // console.log(SHOPCARTURL)
    fetch(SHOPCARTURL.CartFetchURL).then(function(response){
        response.json().then(function(data){
            cb(data)
          // console.log(data)
        })
    })
}
export default {getShopCartListByUser};
/*module.exports = {
  getShopCartListByUser
}*/

