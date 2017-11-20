<template>
  <section id="se02">
    <div class="duiListTitle">
      <span><img src="../../assets/images/ico_line.png"/>大家都在兑</span>
    </div>
    <div class="duiList01">
      <products-integal-list :item="n" v-for="(n,index) in list"></products-integal-list>
    </div>
  </section>
</template>
<script type="text/ecmascript-6">
  import ProductsIntegalList from "./ProductsIntegalList.vue";
  export default {
    props:["list"],
    components: {
      ProductsIntegalList
    }
  }

</script>
<style scoped>
  #se02 {
    width: 100%;
    display: flex;
    flex-flow: column;
    margin: 7rem 0 0 0;
    background: #fff;
    overflow: hidden;

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
