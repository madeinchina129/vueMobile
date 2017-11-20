<template>
  <div class="paySuccPage">

    <shop-header title="支付完成" ></shop-header>
    <section class="paySec">
      <div class="payCon" @click="time">
        <span >支付完成,点击跳出</span>
      </div>
    </section>
    <shop-footer></shop-footer>
  </div>
</template>
<script type="text/ecmascript-6">

  import shopHeader from "../common/Header.vue";
  import shopFooter from "../common/ChickFooter.vue";

  export default {
    components: {
      shopHeader,
      shopFooter
    },

    methods:{
      time:function(){
          this.$router.push("/")
      }
    },
    mounted() {

    }
  }

</script>
<style scoped>

  header {
    width: 100%;
    height: 4rem;
    display: flex;
    /*justify-content: center;*/
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    background: #48b8ff;
    z-index: 999;
    text-align: center;
    font-size: 1.8rem;
    color: #fff;
  }

  .paySec {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    padding: 3rem;

    height: 100%;
  }

  .payCon {
    font-size: 1.6rem;
    width: 18rem;
    height: 16rem;
    background: #C16A6A;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    border-radius: 0.6rem;
    line-height: 2rem;
    color: #2E2E3E;
  }


</style>
