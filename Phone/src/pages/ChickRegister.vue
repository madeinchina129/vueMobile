<template>
  <div>
    <chick-header mi="注册"></chick-header>
    <register></register>
  </div>

</template>

<script type="text/ecmascript-6">
  import ChickHeader from "../components/common/ChickHeader.vue";
  import Register from "../components/register/Register.vue";
  export default {
    components:{
      ChickHeader,
      Register
    },
    methods:{
      go:function (flag) {
        if(flag ==8){
          this.$router.push("/me")
        }
      }
    }
  }
</script>

<style scoped>
</style>
