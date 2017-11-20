<template>
  <div>
    <chick-header mi="登录"></chick-header>
    <login></login>
  </div>

</template>

<script type="text/ecmascript-6">
  import ChickHeader from "../components/common/ChickHeader.vue";
  import Login from "../components/login/Login.vue";
  export default {
    components:{
      ChickHeader,
      Login
    },
    methods:{
      go:function (flag) {
        if(flag ==9){
          this.$router.push("/me")
        }
      }
    }
  }
</script>

<style scoped>

</style>
