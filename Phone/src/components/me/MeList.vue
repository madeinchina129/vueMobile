<template>
  <div class="list">
    <div class="list1">
      <div class="one">
        <div class="li_left">
          <img src="../../assets/my_invite.png" alt=""/>
          <p>邀请有礼</p>
        </div>
        <img class="arrows" src="../../assets/redeem_code_more.png" alt=""/>
      </div>
      <div class="one">
        <div class="li_left">
          <img src="../../assets/ico_my_redeem.png" alt=""/>
          <p>兑换码</p>
        </div>
        <img class="arrows" src="../../assets/redeem_code_more.png" alt=""/>
      </div>
      <div class="one two">
        <div class="li_left">
          <img src="../../assets/ico_integral_task.png" alt=""/>
          <p>成长任务</p>
        </div>
        <img class="arrows" src="../../assets/redeem_code_more.png" alt=""/>
      </div>
    </div>
    <div class="list1">
      <div class="one">
        <div class="li_left">
          <img src="../../assets/ico_kefu.png" alt=""/>
          <p>在线客服</p>
        </div>
        <img class="arrows" src="../../assets/redeem_code_more.png" alt=""/>
      </div>
      <div class="one">
        <div class="li_left">
          <img src="../../assets/ico_my_help.png" alt=""/>
          <p>帮助中心</p>
        </div>
        <img class="arrows" src="../../assets/redeem_code_more.png" alt=""/>
      </div>
      <div class="one two">
        <div class="li_left">
          <img src="../../assets/ico_system_safety.png" alt=""/>
          <p>设置</p>
        </div>
        <img class="arrows" src="../../assets/redeem_code_more.png" alt=""/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

    export default {}
</script>

<style scoped>
  .list{
    display: flex;
    flex-direction: column;
    margin-top: 23rem;
    margin-bottom: 4rem;
  }
  .list1{
    margin-bottom: 0.7rem;
    background: white;
  }
  .one{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.1rem;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid #eef0f2;
  }
  .li_left{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .li_left img{
    width: 1.5rem;
    height: 1.8rem;
    margin-left: 1.2rem;
    margin-right: 1.2rem;

  }
  .arrows {
    height: 1rem;
    margin-right: 1.2rem;
  }
</style>
