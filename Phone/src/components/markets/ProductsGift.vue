<template>
  <section id="se03">
    <div class="duiListTitle">
      <span><img src="../../assets/images/ico_line.png"/>虚拟礼品</span>
      <span class="more">更多<img src="../../assets/images/redeem_code_more.png"/></span>
    </div>
    <div class="duiList01">
      <products-gift-list :item="n" v-for="(n,index) in list"></products-gift-list>
    </div>
  </section>
</template>
<script type="text/ecmascript-6">
import ProductsGiftList from "./ProductsGiftList.vue";
    export default {
      props:["list"],
        components: {
          ProductsGiftList
        }
    }

</script>
<style scoped>
  #se03 {
    width: 100%;
    display: flex;
    flex-flow: column;
    margin:1rem 0 1rem 0;
    background: #fff;
    overflow: hidden;
  }
  .duiListTitle {
    display: flex;
    padding: 1.2rem 1rem;
    justify-content: space-between;
    border-bottom: 1px solid #D3D3D3;
  }

  .duiListTitle span {
    display: flex;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .duiListTitle img {
    display: flex;
    padding: 0 1rem 0 0;
    width: 0.3rem;
    height: 1.5rem;
  }
  .more{
    font-weight: normal;
    color:#c2c2c2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .more img {
    display: flex;
    padding: 0  0 0 0.3rem;
    width: 0.6rem;
    height: 1rem;
  }

  .duiList01 {
    display: flex;
    flex-flow: wrap;
    width: 100%;
    padding-bottom:1.8rem;
  }

  .duiListCon {
    display: flex;
    flex-flow: column;
    width: 33.333%;
    padding: 3rem 0 1.6rem;
    justify-content: center;
    align-items: center;
    border:0.1rem solid #D3D3D3;
    border-left:0;
    border-top:0;
    box-sizing: border-box;
  }
  .last{
    border-right: 0;
  }
  .eggONum{
    justify-content: flex-start;
    font-size: 0.9rem;
  }

  .duiListCon img {
    width: 33.3%;
  }
  .CZvip{
    font-size: 0.9rem;
    font-weight: 600;
    padding:1rem 0;
  }
  .duiListConText{
    display: flex;
    flex-flow: column;
  }
  .eggONum a{
    color:#ff7a61;
  }

</style>
