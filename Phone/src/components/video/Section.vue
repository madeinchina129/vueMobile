<template>
    <div>
      <!--section-->
      <section >
        <article class="arc1" v-for="item in videoList" @click="go(item)">
          <div class="content">
            <div class="introduce">
              <img :src="item.pic"  style="width:5rem;height: 5rem;">
              <div class="word">
                <h4>{{item.name}}</h4>
                <p>原价：20元/月</p>
              </div>
              <div class="price">
                <p>{{item.price}}元/月</p>
                <img src="../../assets/images/varc1_2.png" alt="">
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props:["videoList"],

	  methods:{
	  	go(data){

        this.$router.push({name:"shopDetails",params:{data:data}})
	  	}
	  }
    }
</script>

<style scoped>
  section {
    width: 100%;
  }
  section .arc1 {
    width: 100%;
  }
  section .arc1 .content {
    border-bottom: 1px solid #ebebeb;
    margin-left: 0.1rem;
  }
  section .arc1 .content .introduce {
    width: 100%;
    display: flex;
    align-items: center;
  }
  section .arc1 .content .introduce .word {
    flex: 3;
    text-indent: 1rem;
  }
  section .arc1 .content .introduce .word h4 {
    font-size: 1.4rem;
    font-weight: normal;
  }
  section .arc1 .content .introduce .word p {
    font-size: 1.2rem;
    text-decoration: line-through;
    color: #adadad;
  }
  section .arc1 .content .introduce .price {
    display: flex;
    align-items: center;
    flex: 2;
    justify-content: center;
  }
  section .arc1 .content .introduce .price p {
    font-size: 1.4rem;
    color: red;
  }
  section .arc1 .content .introduce .price img {
    margin-left: 0.5rem;
    height: 2.2rem;
  }
</style>
