<template>
  <!--中间内容部分-->
  <section>
    <!--轮播图-->
    <div class="wheel">
        <wheel></wheel>
    </div>

    <!--选择框-->
    <article class="arc1" >
      <ul>
        <li v-for="item in list">
          <a @click = go>
            <img v-bind:src = item.pic>
            <span>{{item.goodName}}</span>
          </a>
        </li>
      </ul>
    </article>

    <!--内容区2-->
    <article class="arc2">
      <div class="arc2_top">
        <p>发现福利</p>
      </div>
      <div class="arc2_middle">
        <ul>
          <li>
            <a href="#">
              <img src="" v-lazy="arc2_1">
              <div class="introduce">
                <div>
                  <h4>有活动 ></h4>
                  <span>打折的 免费的</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="" v-lazy="arc2_2">
              <div class="introduce">
                <div>
                  <h4>送现金 ></h4>
                  <span>现金券 无上限</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </article>
    <article class="arc2 arc3">
      <div class="arc2_top">
        <p>热门推荐</p>
      </div>
      <div class="arc3_middle">
        <ul>
          <li>
            <a href="#">
              <img src="" v-lazy="arc3_1">
              <div class="introduce3">
                <h4>穿越火线CF-PC版</h4>
                <p>原价：9.7折</p>
                <p>淘宝价：9.7折</p>
                <span>9.5折</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="" v-lazy="arc3_2">
              <div class="introduce3">
                <h4>征途-PC版</h4>
                <p>原价：9.85折</p>
                <p>淘宝价：9.85折</p>
                <span>9.75折</span>
              </div>
            </a>
          </li>
		   <li>
            <a href="#">
              <img src="" v-lazy="arc3_3">
              <div class="introduce3">
                <h4>穿越火线CF-PC版</h4>
                <p>原价：9.7折</p>
                <p>淘宝价：9.7折</p>
                <span>9.5折</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="" v-lazy="arc3_4">
              <div class="introduce3">
                <h4>征途-PC版</h4>
                <p>原价：9.85折</p>
                <p>淘宝价：9.85折</p>
                <span>9.75折</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </article>
  </section>

</template>

<script type="text/ecmascript-6">

  import Wheel from "./Wheel.vue";
//  import Vues from "@/main.js";

  export default {

    props:["list"],
    data(){
      return{
        arc2_1:"./static/images/arc2_1.png",
        arc2_2:"./static/images/arc2_2.png",
        arc3_1:"./static/images/arc3_1.png",
        arc3_2:"./static/images/arc3_2.png",
        arc3_3:"./static/images/arc3_1.png",
        arc3_4:"./static/images/arc3_2.png",
      }
    },
    components:{
      Wheel
    },
    methods:{
      go:function () {
        this.$router.push("/video")
      }
    },

  }
</script>

<style scoped>
  section {
    width: 100%;
  }
  section .wheel {
    width: 100%;
    height: 15rem;
    margin-top: 0.9rem;
    /*background: red;*/
  }
  section .arc1 {
    width: 100%;
    overflow: hidden;
  }
  section .arc1 ul {
    width: 100%;
  }
  section .arc1 ul li {
    float: left;
    width: 25%;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  section .arc1 ul li a {
    display: block;
    text-align: center;
  }
  section .arc1 ul li a img {
    width: 3.3rem;
    height: 3rem;
    margin: 0 auto;
  }
  section .arc1 ul li a span {
    color: #141414;
    font-size: 1.3rem;
  }
  section .arc2 {
    width: 100%;
    border-bottom: 3px solid #ebebeb;
  }
  section .arc2 .arc2_top {
    width: 100%;
    padding: 1rem 0rem;
    border-bottom: 2px solid #ebebeb;
  }
  section .arc2 .arc2_top p {
    text-indent: 1rem;
    font-size: 1.5rem;
  }
  section .arc2 .arc2_middle {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  section .arc2 .arc2_middle ul {
    width: 94%;
  }
  section .arc2 .arc2_middle ul li {
    width: 100%;
    height: 8rem;
    border: 2px solid #f4f4f4;
    border-radius: 5px;
    overflow: hidden;
    margin: 1rem 0rem;
  }
  section .arc2 .arc2_middle ul li a {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
  }
  section .arc2 .arc2_middle ul li a img {
    width: 50%;
    height: 100%;
  }
  section .arc2 .arc2_middle ul li a .introduce {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  section .arc2 .arc2_middle ul li a .introduce div h4 {
    font-size: 1.9rem;
    color: #000000;
  }
  section .arc2 .arc2_middle ul li a .introduce div span {
    font-size: 1.3rem;
    color: #d1d1d1;
  }
  section .arc3 {
    margin-bottom: 5rem;
  }
  section .arc3 .arc3_middle {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  section .arc3 .arc3_middle ul {
    width: 96%;
  }
  section .arc3 .arc3_middle ul li {
    width: 100%;
    margin: 1rem 0rem;
  }
  section .arc3 .arc3_middle ul li img {
    width: 100%;
  }
  section .arc3 .arc3_middle ul li .introduce3 {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
  }
  section .arc3 .arc3_middle ul li .introduce3 h4 {
    font-size: 1.4rem;
    color: #000000;
  }
  section .arc3 .arc3_middle ul li .introduce3 p {
    font-size: 1.2rem;
    color: #b7b7b7;
    text-decoration: line-through;
  }
  section .arc3 .arc3_middle ul li .introduce3 span {
    font-size: 1.4rem;
    color: #ff421f;
    font-weight: bold;
  }
</style>
