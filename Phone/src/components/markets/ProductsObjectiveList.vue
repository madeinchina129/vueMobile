<template>
  <section id="se04">
    <div class="duiListTitle">
      <span><img src="../../assets/images/ico_line.png"/>实物礼品</span>
    </div>
    <div class="duiList01">
      <products-objective-list-left :item1="n" v-for="(n,index) in list" v-if="index<1" :list="objectiveListLeft"></products-objective-list-left>
      <products-objective-list-right :item="n" v-for="(n,index) in list" v-if="index<1" :list="objectiveListRight" ></products-objective-list-right>

    </div>
  </section>
</template>
<script type="text/ecmascript-6">
  import ProductsObjectiveListLeft from "./ProductsObjectiveListLeft.vue";
  import ProductsObjectiveListRight from "./ProductsObjectiveListRight.vue";
  import ObjectiveListRightService from "../../fetch/ObjectiveListRightService";
  import ObjectiveListLeftService from "../../fetch/ObjectiveListLeftService";

  export default {
    props: ["item1","item","list"],
    data(){
      return{
        objectiveListRight:[],
        objectiveListLeft:[]
      }
    },
    components: {
      ProductsObjectiveListLeft,
      ProductsObjectiveListRight
    },
    methods:{
      initData: function () {

        ObjectiveListRightService.getShopCartListByUser((data)=>{
          this.objectiveListRight = data;
        });
        ObjectiveListLeftService.getShopCartListByUser((data)=>{
          this.objectiveListLeft = data;
        });
      }
    },
    created:function(){
      this.initData();
    }
  }

</script>
<style scoped>

  #se04 {
    width: 100%;
    display: flex;
    flex-flow: column;
    background: #fff;
    overflow: hidden;
    margin-top:0px!important;
  }
  #se04 .duiList01{
    display: flex;
  }

  .duiListTitle {
    display: flex;
    padding: 1.2rem 1rem;
    justify-content: space-between;
    border-bottom: 0.1rem solid #D3D3D3;
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




  .duiListCon img {
    width: 33.3%;
  }

  .eggONum a{
    color:#ff7a61;
  }


</style>
