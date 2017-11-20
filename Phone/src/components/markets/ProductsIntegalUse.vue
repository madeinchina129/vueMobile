<template>
  <section id="se01">
<egg-num :item="n" v-for="(n,index) in list"></egg-num>

    <div class="JFPos">
      <div class="useJF">
        <span class="dhjl"><img src="../../assets/images/dhjl.jpg"/>兑换记录</span><img style="width:1px;height:50px;"
                                                                                 src="../../assets/images/abc_list_selector_disabled_holo_light.png"/>
        <span class="zjf"><img src="../../assets/images/zjf.jpg"/>赚积分</span><img style="width:1px;height:50px;"
                                                                              src="../../assets/images/abc_list_selector_disabled_holo_light.png"/>
        <span class="sssq"><img src="../../assets/images/sssq.jpg"/>试试手气</span>
      </div>
    </div>
  </section>
</template>
<script type="text/ecmascript-6">
  import EggNum from "./eggNum.vue";

  export default {
    props:["list"],

    components: {
      EggNum
    },

  }

</script>
<style scoped>
  /*积分使用*/
  #se01 {
    width: 100%;
    display: flex;
    flex-flow: column;
    margin-top: 5rem;
    position: relative;
  }



  .seImg span {

    color: #fff;
    font-size: 0.9rem;
  }

  .seImg img {
    width: 1.1rem;
    height: 1.5rem;
    padding-left: 0.5rem;
  }



  .JFPos {
    position: absolute;
    left: 0px;
    top: 11.6rem;
    width: 100%;
  }

  .useJF {
    margin: 0 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    padding: 1.2rem;
    border-radius: 0.3rem;

  }

  .useJF span {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    line-height: 2.3rem;
  }

  .useJF img {
    width: 2.3rem;
  }

</style>
