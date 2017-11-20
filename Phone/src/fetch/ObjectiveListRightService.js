import  SHOPCARTURL from "../constans/FetchApiUrl";
var getShopCartListByUser = function(cb){
  // console.log(SHOPCARTURL)
  fetch(SHOPCARTURL.ObjectiveListRightURL).then(function(response){
    response.json().then(function(data){
      cb(data)
      // console.log(data)
    })
  })
}
export default {getShopCartListByUser};
