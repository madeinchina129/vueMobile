<template>
  <div class="duiListConRight">
    <objective-list-right-con :item="n" v-for="(n,index) in list"></objective-list-right-con>
  </div>
</template>
<script type="text/ecmascript-6">
  import ObjectiveListRightCon from "./ProductsObjectiveListRightCon.vue";

  export default {
    props: ["item", "list"],
    components: {
      ObjectiveListRightCon
    }
  }

</script>
<style scoped>
  .duiListConRight{
    display: flex;
    flex-flow: column;
    width:60%;
  }

  .duiListConRight .duiListCon img{
    width:20%;
    padding-right: 2rem;
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



  .eggONum a{
    color:#ff7a61;
  }
</style>
