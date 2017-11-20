<template>
    <div>
      <!--header-->
      <header>
        <a @click="go"><img src="../../assets/images/vheader1.png" alt=""></a>
        <p>视频会员</p>
      </header>
      <div class="clearHeader"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      methods:{
        go:function () {
          this.$router.push("./");
        }
      }
    }
</script>

<style scoped>
  /*header*/
  header {
    width: 100%;
    height: 4rem;
    background: #f9f9f9;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    align-items: center;
    position: fixed;
  }
  header a {
    display: block;
  }
  header a img {
    width: 1.5rem;
    height: 2rem;
    margin-left: 2.2rem;
  }
  header p {
    flex: 1;
    text-align: center;
    font-size: 1.8rem;
    margin-left: -2.2rem;
  }
  .clearHeader {
    width: 100%;
    height: 4rem;
  }
</style>
