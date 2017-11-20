<template>
  <div>
    <chick-header title="商品详情" back="<"></chick-header>
    <div class="picture">
      <img :src="this.$route.params.data.pic" alt=""/>
    </div>
    <div class="cont">
      <div class="c_one">
        <p class="bo" >{{this.$route.params.data.name}}</p>
        <p ><span>{{this.$route.params.data.price}}</span>元</p>
      </div>
      <div class="c_two">
        <p style="padding-right:0.5rem;">玩家账号</p>
        <input type="text" placeholder="请输入账号" style="border-radius:0.3rem;border:1px solid #bfbfbf;"
               v-model="vipnum"/>
        <span style="display:none;">{{this.vipnum}}</span>
      </div>
      <div class="c_one c_th">
        <p class="bo">兑换说明</p>
        <p class="c_th_o bo">1.兑换时请仔细核对账号信息无误</p>
        <p class="c_th_o bo">2.此商品一天仅可兑现一次</p>
        <p class="c_th_o">3.工作日上午09:30更新鸡蛋商城</p>
      </div>
      <div class="c_f">
        <div class="c_fo">
          <a href="javascript:void(0)" @click="addCart">添加购物车</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ChickHeader from "../components/common/Header.vue";
  export default {
    data(){

      return{
        vipnum:""
      }
    },
    components:{
      ChickHeader
    },
    mounted(){


    },
    methods:{
      addCart:function(){
//        alert(this.vipnum)
//        this.$router.push({name:"shopDetails"})
        var that = this;
        var goodsname = this.$route.params.data.name;
        var goodsprice = this.$route.params.data.price;
        var goodsimg = this.$route.params.data.pic;
        var vipNum = this.vipnum;


        fetch("http://10.35.166.8:3000/products/AddCartApi?goodsName="+goodsname+"&price="+goodsprice+"&goodsImg="+goodsimg+"&vipNum="+vipNum, {
          method : 'GET'
        }).then(function(res){
          if(res.ok){
            res.json().then(function(data){
              that.successFunc(data);
            })
          }else if(res.status === 401){
            console.log('请求失败');
            that.errorFunc();
          }
        }, function(e){
          console.log('请求失败');
          that.errorFunc();
        })
//        this.$router.push({name:"shopDetails",params:{}})
        this.$router.push("/category")
      }
    }
  }
</script>

<style scoped>
  header {
    width: 100%;
    height: 3.4rem;
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
    color:#fff;
  }
  .picture {
    width: 100%;
    display: flex;
    justify-content: center;
    background: white;
    margin-bottom: 0.2rem;
    /*margin-top: 3rem;*/
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    margin-top:4rem;
  }

  .picture img {
    width: 6rem;
    height: 6rem;
  }

  .cont {
    display: flex;
    flex-direction: column;
  }

  .c_one {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    background: white;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
  }

  .c_one p:nth-child(1) {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .c_one p:nth-child(2) {
    font-size: 1.2rem;
    color: red;
  }

  .c_one p:nth-child(2) span {
    color: #999;
    font-size: 1.2rem;

  }

  .c_two {
    display: flex;
    flex-direction: row;
    margin-bottom: 0.5rem;
    background: white;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;

  }

  .c_two p:nth-child(1) {
    font-weight: 600;
  }

  .c_th p:nth-child(2) {
    color: black;
  }

  .c_th .c_th_o {
    color: #999;
    font-size: 1.2rem;
  }

  .c_f {
    background: white;
    padding-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
  }

  .c_fo {
    width: 90%;
    height: 5rem;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

  }

  .c_fo a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
    font-size: 1.8rem;
  }

  .bo {
    margin-bottom: 0.5rem;
  }
</style>
