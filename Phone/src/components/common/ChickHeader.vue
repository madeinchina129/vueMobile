<template>
  <header>
      <div class="left">
        {{left}}
      </div>
      <div class="mi">
        {{mi}}
      </div>
      <div class="right">
        {{right}}

      </div>
  </header>
</template>

<script type="text/ecmascript-6">

    export default {
      props:["right","left","mi"]
    }
</script>

<style scoped>
  header{
    width: 100%;
    /*height: 200px;*/
    background:#46b9fa;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem 0;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;

  }
  header .right img{
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 1.25rem;
  }
  header .right{
    font-size: 1.2rem;
    color: white;
    margin-right: 1.25rem;
    width: 3rem;
    height: 2rem;
  }
  header .left{
    font-size: 1.2rem;
    color: white;
    margin-left: 1.25rem;
    width: 3rem;
    height: 2rem;
  }
  header .mi{
    font-size: 1.8rem;
    color: white;
  }
</style>
