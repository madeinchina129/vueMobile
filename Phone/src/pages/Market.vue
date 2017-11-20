<template>
  <div style="background: #eff1f3;">
    <page-header title="鸡蛋商城"></page-header>
    <products-integal-use :list="eggTotleList"></products-integal-use>

    <products-integal :list="integalList"></products-integal>

    <products-gift :list="giftList"></products-gift>

    <products-objective></products-objective>

    <page-copy></page-copy>
    <page-footer></page-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import PageHeader from "../components/common/Header.vue";
  import PageFooter from "../components/common/Footer.vue";
  import PageCopy from "../components/common/Copy.vue";
  import ProductsGift from "../components/markets/ProductsGift.vue";
  import ProductsIntegal from "../components/markets/ProductsIntegal.vue";
  import ProductsIntegalUse from "../components/markets/ProductsIntegalUse.vue";
  import ProductsObjective from "../components/markets/ProductsObjective.vue";
  import ProductsGiftService from "../fetch/ProductsGiftService";
  import ProductsIntegalService from "../fetch/ProductsIntegalService";
  import EggTotleNumService from "../fetch/EggTotleNum";


  export default {
    data(){
      return {
        giftList:[],
        integalList:[],
        eggTotleList:[]

      }
    },
    components: {
      PageHeader,
      PageFooter,
      PageCopy,
      ProductsGift,
      ProductsIntegal,
      ProductsIntegalUse,
      ProductsObjective
    },
    methods:{
      initData: function () {
        ProductsGiftService.getShopCartListByUser((data)=>{
          this.giftList = data;
        });
        ProductsIntegalService.getShopCartListByUser((data)=>{
          this.integalList = data;
        });
        EggTotleNumService.getShopCartListByUser((data)=>{
          this.eggTotleList = data;
        });

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
    height: 4rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    background: #48b8ff;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
  }
  .copy{
    display: flex;
    padding:1rem 0;
    justify-content: center;
    align-items: center;
    margin-bottom:5rem;
    font-size: 0.9rem;
    color:#969696;
  }


</style>
