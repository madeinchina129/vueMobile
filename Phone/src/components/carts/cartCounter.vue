<template>
  <header class="total">
    <span class="titleCart">总件数:{{tn}},总价格:{{tp}}</span>
  </header>

</template>
<script type="text/ecmascript-6">

  export default {
    props: ["tn", "tp"]
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
    font-size: 1.4rem;
    color: #fff;
  }
  .total{
    position:fixed;
    left:0;
    top:4rem;
  }
</style>
