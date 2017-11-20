<template>
  <div class="fiche">
    <div class="po">
      <div class="card">
        <div class="c_left">
          <img src="../../assets/ico_my_wallet.png" alt=""/>
          <div class="c_mi">
            <p>钱包余额</p>
            <p>￥0</p>
          </div>
        </div>

        <div class="c_right">
          给钱包充值 >
        </div>
      </div>
      <div class="discounts">
        <div class="c_left dis_left">
          <img src="../../assets/ico_my_egg.png" alt=""/>
          <div class="c_mi dis_mi dis_mi1">
            <p>我的鸡蛋</p>
            <p>0</p>
          </div>
        </div>
        <div class="c_left dis_left dis_mi">
          <img class="mi1" src="../../assets/ico_my_coupon.png" alt=""/>
          <div class="c_mi dis_mi dis_mi2">
            <p>优惠券</p>
            <p>0</p>
          </div>
        </div>
        <div class="c_left dis_left dis_la">
          <img class="mi2" src="../../assets/ico_my_card.png" alt=""/>
          <div class="c_mi dis_mi dis_mi3">
            <p>游戏卡包</p>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

    export default {}
</script>

<style scoped>
  .fiche{
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    /*top: 10rem;*/
    flex-direction: column;
    /*margin-bottom: 0.8rem;*/
  }
  .po{
    position: absolute;
    width: 95%;
    top: 9.9rem;
    background: white;
    z-index: 2;
    box-shadow: 0 0 5px #e6e7e9;
    border-radius: 5px;
  }
  .card{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.25rem;
    padding-bottom: 1.8rem;
    border-bottom: 1px solid #eef0f2;
  }
  .c_left{
    display: flex;
    flex-direction: row;
  }
  .c_left img{
    width: 2.4rem;
    height: 1.8rem;
    margin-top: 0.5rem;
    margin-left: 1.5rem;
  }
  .c_mi p:nth-child(2){
    color: #ff421f;
    font-size: 2rem;
  }
  .c_right{
    color: #b7b7b7;
    margin-right: 1.1rem;
  }
  .c_mi{
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    align-content: center;
  }
  .discounts{
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.9rem;
    margin-top:0.9rem;
  }
  .dis_left img{
    width: 1.3rem;
    margin-left: 0.5rem;
  }
  .dis_mi{
    margin-left: 0.5rem;
    margin-top: -0.1rem;
  }
  .dis_left{
    border-right: 1px solid #eef0f2;
    padding-right: 0.5rem;
  }
  .dis_mi img,.dis_la img{
    width: 2rem;
    height: 1.5rem;
  }
  .discounts .dis_la{
    border-right: none;
  }
  .dis_mi p:nth-child(1){
    font-size: 1.4rem;
    font-weight: 600;
    margin-top: 0.8rem;
  }
  .dis_mi p:nth-child(2){
    color: #b7b7b7;
    font-size: 1rem;
    /*margin-top: 0.3rem;*/
  }
  .mi1{
    margin-top: 0.85rem!important;
  }
  .mi2{
    margin-top: 0.85rem!important;
  }
</style>
