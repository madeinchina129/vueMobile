<template>
  <li class="item">
    <div class="shopping">
      <div class="shop-group-item">
        <div class="shop-name">
          <input type="checkbox" class="check goods-check shopCheck">
          <h4><a href="#">{{item.goodsName}}</a></h4>
          <div class="coupons"><span>编辑</span></div>
        </div>
        <ul>
          <li>
            <div class="shop-info">
              <input type="checkbox" class="check goods-check goodsCheck">
              <div class="shop-info-img"><a href="#"><img :src="item.pic"/></a></div>
              <div class="shop-info-text">
                <h4>{{item.goodsName}}</h4>
                <span class="vipname"><i>会员账号：</i><span>{{item.vipName}}</span></span>
                <div class="shop-brief">
                  <span>×<span class="num">1</span></span>
                  <div class="shop-price">
                    <div class="shop-pices">￥<b class="price">{{item.price}}</b></div>
                  </div>
                </div>

              </div>
            </div>
          </li>
        </ul>
        <div class="shopPrice">本店总计：￥<span class="shop-total-amount ShopTotal">0.00</span>
          <a href="javascript:void(0);" class="settlement" @click="send">充值</a>
        </div>
      </div>
    </div>

  </li>

</template>
<script type="text/ecmascript-6">
  import "../../assets/js/jquery-1.8.3.min";
  import "../../assets/js/cart.js"
  import pay from "./play.vue"


  export default {

    props: ["item", "idx", "a"],
    components: {
      pay
    },
    methods: {

      send() {
        var totalPrice = this.item.price;
        if (totalPrice == 0) {
          return;
        }

        var goodsName = this.item.goodsName;
        var vipNum = this.item.vipName;
        var goodspic = this.item.pic;
        this.$router.push({name: "sss", params: {topr: totalPrice, gn: goodsName, vn: vipNum,goodspic:goodspic}})

      }
    },
    created: function () {

    }
  }


</script>
<style scoped>
  input[type="checkbox"] {
    -webkit-appearance: none;
    outline: none;
  }

  input.check {
    background: url(../../assets/images/icon_radio3.png) no-repeat center left;
    background-size: 1.3rem 1.3rem;
    position: absolute;
    top: 50%;
    left: 1rem;
    margin-top: -1.8rem;
    width: 2rem;
    height: 3.5rem;
  }

  input.check:checked {
    background: url(../../assets/images/icon_radio4.png) no-repeat center left;
    background-size: 1.3rem 1.3rem;
  }

  input.goodsCheck:checked {
    background: url(../../assets/images/icon_radio4.png) no-repeat center left;
    background-size: 1.3rem 1.3rem;
  }

  input.check:checked {
    background: url(../../assets/images/icon_radio4.png) no-repeat center left;
    background-size: 1.3rem 1.3rem;
  }

  .checked {
    background: url(../../assets/images/icon_radio4.png) no-repeat left center;
    background-size: 1.3rem 1.3rem;
    position: absolute;
    top: 50%;
    left: 1.5rem;
    margin-top: -11.8rem;
    width: 2rem;
    height: 3.5rem;
  }





  .box span {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 2rem;
    text-align: center;
    background-color: darkgray;
  }

  .box input {
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 2rem;
    text-align: center;
    border: 0.1rem solid gray;
  }

  .shopping {
    clear: both;
    overflow: hidden;
    height: auto;
    /*padding-bottom: 60px;*/
    margin-top: 1rem;
  }

  .cartAddress {
    font-size: 1.2rem;
    color: #646464;
    padding: 1.3rem;
  }

  .cartAddress .iconfont {
    font-size: 1.2rem;
    color: #646464;
    padding-right: 1rem;
  }

  .shop-group-item {
    margin-bottom: 0.5rem;
  }

  .shop-group-item ul li {
    border-bottom: 0.1rem solid #fff;
  }

  .shop-group-item ul li:last-child {
    border-bottom: none;
  }

  .shop-name {
    background: #fff;
    height: 3.5rem;
    line-height: 3.5rem;
    padding: 0 1.5rem;
    position: relative;
  }

  .shop-name h4 {
    float: left;
    font-size: 1.4rem;
    padding-left: 2.5rem;
    margin-left: 1rem;
  }

  .shop-name h4 a {
    font-weight: 600;
  }

  .shop-name .coupons {
    float: right;
    font-weight: 600;
  }

  .shop-name .coupons span {
    display: inline-block;
    padding: 0 0.5rem;
  }

  .shop-name .coupons em {
    color: #e0e0e0;
  }

  .shop-info {
    height: 6.6rem;
    padding: 1rem 1.5rem;
    position: relative;
  }

  .shop-info .checkbox {
    background: url(../../assets/images/icon_radio3.png) no-repeat left center;
    background-size: 2rem 2rem;
    position: absolute;
    top: 50%;
    left: 1.5rem;
    margin-top: -6rem;
    width:2rem;
    height: 12rem;
  }

  .shop-info .checkbox1 {
    background: url(../../assets/images/icon_radio4.png) no-repeat left center;
    background-size: 2rem 2rem;
    position: absolute;
    top: 50%;
    left: 1.5rem;
    margin-top: -6rem;
    width: 2rem;
    height: 12rem;
  }

  .shop-info .shop-info-img {
    position: absolute;
    top: 2rem;
    left: 3.5rem;
    width: 4.9rem;
    height: 4.6rem;
  }

  .shop-info .shop-info-img img {
    width: 100%;
    height: 100%;
  }

  .shop-info .shop-info-text {
    margin-left: 9rem;
    padding: 1rem 0;
    text-align: left;
  }

  .shop-info .shop-info-text h4 {
    font-size: 1.4rem;
    overflow: hidden;
    text-align: left;
  }

  .vipname {
    font-size: 1.2rem;
    color: #8998FF;
    padding-top: 1.5rem;
  }

  .shop-info .shop-info-text .shop-brief {
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 1.2rem;
    color: #81838e;
    white-space: nowrap;
    padding-top: 0.5rem;
    display: flex;
    justify-content: space-between;
  }

  .shop-info .shop-info-text .shop-brief span {
    display: inline-block;
    margin-right: 0.8rem;
  }

  .shop-info .shop-info-text .shop-price {
    height: 2.4rem;
    line-height: 2.4rem;
    position: relative;
  }

  .shop-info .shop-info-text .shop-price .shop-pices {
    color: red;
    font-size: 1.6rem;
  }

  .shop-info .shop-info-text .shop-pices {
    position: absolute;
    right: 0px;
    top: 0;
    width: 8.4rem;
    box-sizing: border-box;
    white-space: nowrap;
    height: 100%;
  }

  .shop-info .shop-info-text .shop-arithmetic a {
    display: inline-block;
    width: 2.3rem;
    height: 2.2rem;
    line-height: 2.2rem;
    text-align: center;
    background: #fff;
    font-size: 1.6rem;
  }

  .shop-info .shop-info-text .shop-arithmetic .minus {
    border-right: 0.1rem solid #e0e0e0;
  }

  .shop-info .shop-info-text .shop-arithmetic .failed {
    color: #d1d1d1;
  }

  .shop-info .shop-info-text .shop-arithmetic .plus {
    border-left: 0.1rem solid #e0e0e0;
  }

  .shop-info .shop-info-text .shop-arithmetic .num {
    width: 3.2rem;
    text-align: center;
    border: none;
    display: inline-block;
    height: 100%;
    box-sizing: border-box;
    vertical-align: top;
    margin: 0 -0.6rem;
  }

  .shopPrice {
    background: #fff;
    height: 3rem;
    padding: 0 1.5rem;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .shopPrice span {
    color: #f00;
  }

  .shopPrice .settlement {
    display: inline-block;
    float: right;
    width: 5.6rem;
    height: 2.2rem;
    line-height: 2.2rem;
    text-align: center;
    color: #fff;
    font-size: 1.6rem;
    background: #f23030;
    margin: 0 0.5rem;
    border-radius: 0.3rem;
  }

</style>
