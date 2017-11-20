<template>
  <div>
    <shop-header title="购物车"></shop-header>
    <cart-counter :tp="totalPrice" :tn="totalNum"></cart-counter>
    <cart-product-list  :list="cartList"></cart-product-list>

  </div>
</template>
<script type="text/ecmascript-6">
  import shopHeader from "../components/common/Header.vue";

  import cartCounter from "../components/carts/cartCounter.vue";
  import cartProductList from "../components/carts/cartProductList.vue";
  import cartService from "../fetch/cartService";




  export default {
    data() {
      return {
        totalPrice: 0,
        totalNum: 0,
        cartList:[]
      }
    },
    components: {
      shopHeader,
      cartCounter,
      cartProductList
    },
    methods:{

      initData: function () {
        cartService.getShopCartListByUser((data)=>{
          this.cartList = data;
          this.countCart(data);
        })
      },
      countCart:function (data) {
        this.totalNum =0;
        this.totalPrice =0;
        data.forEach((val,index)=>{
          this.totalNum += val.qal;
          this.totalPrice += val.qal * val.price;
        })
      }

    },
    created:function(){
      this.initData();
    }

  }

</script>
<style scoped>
  header {
    width: 100%;
    height: 3.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    background: #48b8ff;
    z-index: 999;
    text-align: center;
    font-size: 1.8rem;
    color:#fff;
  }

  header h1 {
    font-size: 1.6rem;
    color: #333;
    height: 4.4rem;
    line-height: 4.4rem;
    display: block;
    text-align: center;
  }

  header a {
    display: block;
    height: 4.4rem;
    line-height: 4.4rem;
  }

  header a.back span {
    display: inline-block;
    width:2.5rem;
    height: 2.5rem;
    margin: 1rem 0.5rem;
    background: url("../assets/images/icon-back.png") no-repeat;
    background-size: 100%;
  }

  /*头部结束*/



</style>
