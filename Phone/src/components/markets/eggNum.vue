<template>
  <div class="seImg">
    <span class="eggTolNum">{{item.eggTotleNum}}<img src="../../assets/images/ico_chicken_mario_egg.png"/></span>
    <span class="eggGQTime"><i class="xian"></i><span class="eggGQNum">{{item.eggTotleNum}}</span>个鸡蛋将在12月31号过期<i
      class="xian"></i></span>
  </div>
</template>
<script type="text/ecmascript-6">

  export default {
    props: ["item"],
    components: {}
  }

</script>
<style scoped>
  /*鸡蛋数量*/
  .seImg {
    display: flex;
    flex-flow: column;
    margin: 0 2rem;
    background: url("../../assets/images/my_head_bg.png");
    background-size: cover;
    padding: 1.6rem 0 3.8rem;

  }

  .eggTolNum {
    display: flex;
    justify-content: center;
    align-items: baseline;
    font-size: 36px !important;
  }

  .eggGQTime {
    padding-top: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .xian {
    opacity: .6;
    width: 3.2rem;
    height: 0.2rem;
    background: #fff;
  }

  .seImg img {
    width: 1.1rem;
    height: 1.5rem;
    padding-left: 0.5rem;
  }
</style>
