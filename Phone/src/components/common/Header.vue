<template>
  <header class="title">
    <a href="javascript:history.back(-1)" class="back">{{back}}</a>
    {{title}}
    <div class="go"></div>
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ["title","back"]
  }
</script>

<style scoped>
  header {
    /*background: red;*/
    font-size: 1.8rem;
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
  }

  .back {
    display: block;
    font-size: 3rem!important;
    padding-left:1rem;
    color:#fff;
  }
</style>
