<template>
  <div>
    <products-objective-list :list="objectiveList"></products-objective-list>
  </div>
</template>
<script type="text/ecmascript-6">
  import ProductsObjectiveList from "./ProductsObjectiveList.vue";
  import ObjectiveListLeftService from "../../fetch/ObjectiveListLeftService";
  import ObjectiveListRightService from "../../fetch/ObjectiveListRightService";
  export default {
    data(){
      return{
      objectiveList:[]
      }
    },
    components: {
      ProductsObjectiveList
    },
    methods:{
      initData: function () {
        ObjectiveListLeftService.getShopCartListByUser((data)=>{
          this.objectiveList = data;
//          this.countCart(data);
        });
        /*ObjectiveListRightService.getShopCartListByUser((data)=>{
          this.objectiveList = data;
//          this.countCart(data);
        });*/
      }
    },
    created:function(){
      this.initData();
    }

  }

</script>
<style scoped>

</style>
