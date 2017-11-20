<template>
  <div>
  <!--头部固定-->
  <header>
    <ul>
      <li>
        <span>充值</span>
      </li>
      <li>
        <span>号箱</span>
      </li>
      <li>
        <span>账单</span>
      </li>
    </ul>
  </header>
  <!--清楚header定位的高度-->
  <div class="clearHeader"></div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
  header {
    width: 100%;
    height: 4rem;
    background: #48b8ff;
    position: fixed;
    z-index: 10;
  }
  header ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  header ul li {
    margin-right: 2rem;
  }
  header ul li span {
    font-size: 1.6rem;
    color: #ffffff;
  }
  .clearHeader {
    width: 100%;
    height: 4rem;
  }
</style>
