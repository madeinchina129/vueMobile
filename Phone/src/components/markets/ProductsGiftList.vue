<template>
  <div class="duiListCon" @click="goDet(item)">
    <img :src="item.pic"/>
    <div class="duiListConText">
      <span class="CZvip">{{item.title}}</span>
      <span class="eggONum"><a>{{item.eggNum}}</a>鸡蛋</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props:["item"],
    components: {

    },
    methods:{
      goDet(data){
        this.$router.push({name:"shopDetails",params:{data:data}})
      }
    }
  }

</script>
<style scoped>
  .duiListTitle span {
    display: flex;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .duiListTitle img {
    display: flex;
    padding: 0 1rem 0 0;
    width: 0.3rem;
    height: 1.5rem;
  }
  .more img {
    display: flex;
    padding: 0  0 0 0.3rem;
    width: 0.6rem;
    height: 1rem;
  }

  .duiListCon {
    display: flex;
    flex-flow: column;
    width: 33.333%;
    padding: 3rem 0 1.6rem;
    justify-content: center;
    align-items: center;
    border:0.1rem solid #D3D3D3;
    border-left:0;
    border-top:0;
    box-sizing: border-box;
  }
  .last{
    border-right: 0;
  }
  .eggONum{
    justify-content: flex-start;
    font-size: 0.9rem;
  }

  .duiListCon img {
    width: 33.3%;
  }
  .CZvip{
    font-size: 0.9rem;
    font-weight: 600;
    padding:1rem 0;
  }
  .duiListConText{
    display: flex;
    flex-flow: column;
  }
  .eggONum a{
    color:#ff7a61;
  }
</style>
