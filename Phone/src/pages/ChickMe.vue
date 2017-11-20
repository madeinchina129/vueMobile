<template>
  <div>


    <chick-header right="消  息"></chick-header>
    <!--<chick-header></chick-header>-->
    <!--<img class="img1" src="../assets/ico_news.png" alt=""/>-->
    <!--../../assets/ico_news.png-->

    <me-card></me-card>
    <me-list></me-list>
    <me-message></me-message>
  </div>

</template>

<script type="text/ecmascript-6">
    import ChickHeader from "../components/common/ChickHeader.vue";
    import MeCard from "../components/me/MeCard.vue";
    import MeList from "../components/me/MeList.vue";
    import MeMessage from "../components/me/MeMessage.vue";


    export default {

      components:{
        ChickHeader,
        MeMessage,
        MeCard,
        MeList
      },

      mounted(){

      }

    }
</script>

<style scoped>
  div{
    background: #ebebeb;
  }
  .img1{
    position: absolute;
    top:0.5rem;
    right: 1.5rem;
    z-index: 25;
    color: white;
    width: 1.8rem;
  }

</style>
