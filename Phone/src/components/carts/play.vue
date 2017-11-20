<template>
  <div class="payPage">

    <shop-header title="支付页" back="<"></shop-header>
    <section class="paySec">
      <div class="payCon">
        <div class="goodsname">{{this.$route.params.gn}}</div>
        <div class="vipname">玩家账号:
          <div>{{this.$route.params.vn}}</div>
        </div>
        <div class="paymoney">应付金额:
          <div>{{this.$route.params.topr}}</div>
        </div>
        <a href="#" class="settlement" @click="paysucc">确认支付</a>
      </div>
    </section>
    <shop-footer></shop-footer>
  </div>
</template>
<script type="text/ecmascript-6">

  import shopHeader from "../common/Header.vue";
  import shopFooter from "../common/ChickFooter.vue";

  export default {
    props: ["sonMsg"],
    components: {
      shopHeader,
      shopFooter
    },
    mounted() {
    },

    data() {
      return {}
    },
    methods: {
      fn() {
        alert(this.aa);
      },
      paysucc:function(){
        this.$router.push("/paySucc")
      }
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

    height:100%;
  }
  .payCon{
    font-size: 1.6rem;
    width:18rem;
    height:16rem;
    background: #C16A6A;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    border-radius: 0.6rem;
    line-height: 2rem;
    color:#2E2E3E;
  }
  .vipname {
    display: flex;

  }

  .paymoney {
    display: flex;
  }
  .payCon .settlement {
    display: inline-block;
    float: right;
    padding:0.3rem 0.8rem;
    line-height: 2.2rem;
    text-align: center;
    color: #fff;
    font-size: 16px;
    background: #f23030;
    margin: 2rem 0.5rem;
    border-radius: 0.3rem;

  }

</style>
