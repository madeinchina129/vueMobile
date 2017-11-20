<template>
  <footer>
      <a @click="go(4)">
        <img src="../../assets/ico_home_default.png" alt=""/>
        <span>首页</span>
      </a>
      <a @click="go(3)">
        <img class="f_img" src="../../assets/ico_order.png" alt=""/>
        <span>购物车</span>
      </a>
      <a @click="go(1)">
        <img src="../../assets/iv_dark_mall.png" alt=""/>
        <span>商城</span>
      </a>
      <a  @click="go(2)">
        <img src="../../assets/iv_dark_account.png" alt=""/>
        <span>我的</span>
      </a>
  </footer>
</template>

<script type="text/ecmascript-6">

  import  cookie from "../../assets/js/cookie.js";

  export default {
      data(){
        return{
          userName:null
       }
     },
      methods:{
        go:function (flag) {
          this.userName = cookie.GetCookie("user");
           if(this.userName==false){
             alert("请登录后操作！")
             this.$router.push("/me");
           }else{

             if(flag ==1){
               this.$router.push("/market")
             }else if(flag ==2){
               this.$router.push("/me")
             }else if(flag ==3){
               this.$router.push("/category")
             }else{
               this.$router.push("/")
             }

           }
        }
      },
      created(){
        this.userName = cookie.GetCookie("user");
        if(this.userName==false){

          this.$router.push("/me");

        }
      }
    }
</script>

<style scoped>
  footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: white;
    display: flex;
    justify-content: space-between;
    padding-top: 0.7rem;
    align-items: center;
  }
  footer a{
    width: 23%;
    color:#7f8393;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  footer img{
    width: 1.5rem;
  }
  .f_img{
    width: 1.8rem;
  }
</style>
