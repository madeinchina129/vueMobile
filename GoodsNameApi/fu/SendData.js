
var mongooseActive = require("../mongodb/mongooseActive");

let goodsObj = [
    {"goodName":"充游戏","pic":"./static/images/wt1.png"},
    {"goodName":"充手机","pic":"./static/images/arc1_2.png"},
    {"goodName":"充Q币","pic":"./static/images/arc1_3.png"},
    {"goodName":"腾讯服务","pic":"./static/images/arc1_4.png"},
    {"goodName":"充视频","pic":"./static/images/arc1_5.png"},
    {"goodName":"加油卡","pic":"./static/images/arc1_6.png"},
    {"goodName":"卡变现","pic":"./static/images/arc1_7.png"},
    {"goodName":"敬请期待","pic":"./static/images/arc1_8.png"}
];

let videsObj = [
    {"name":"爱奇艺黄金会员直充","price":19},
    {"name":"优酷黄金会员卡密","price":20},
    {"name":"腾讯视频会员直冲","price":15},
    {"name":"芒果TV全屏会员","price":19}

];

// testAdd()

let datas = 1;


function testAdd() {
    let i=0;
    setInterval(function () {
        if(i<videsObj.length){

            mongooseActive.MongoTest("video",videsObj[i],1,(err,results)=>{
                console.log(results);
                datas = results;
            });

        }
        i++;
    },1000);
}

// console.log(datas)
module.exports = {
      // s:datas
};