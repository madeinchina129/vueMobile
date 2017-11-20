<template>
  <div>
    <my-header></my-header>
    <my-section :list="goodsNames"></my-section>

  </div>

</template>

<script type="text/ecmascript-6">

  import myHeader from "../components/main/Header.vue";
  import mySection from "../components/main/Section.vue";

  import data from "../axios/axios.js";

  export default {

    data(){
     return {
        goodsNames:[]
     }
    },
    components:{
      myHeader,
      mySection
    },
    created:function () {
//      s = this.goodsNames;
//      this.goodsNames = data.data;
//      console.log(this.goodsNames)


      data.Goodsdata((data)=>{

        this.goodsNames = data;
//        console.log(this.goodsNames)
      })

    }
  }
</script>

<style scoped >

</style>
