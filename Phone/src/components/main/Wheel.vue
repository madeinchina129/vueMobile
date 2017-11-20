<template>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../assets/images/wheel1.png" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/images/wheel2.png" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/images/wheel3.png" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/images/wheel4.png" alt=""></div>

      </div>
      <!-- 如果需要分页器 -->
      <!--<div class="swiper-pagination"></div>-->

      <!-- 如果需要导航按钮 -->
      <!--<div class="swiper-button-prev"></div>-->
      <!--<div class="swiper-button-next"></div>-->

      <!-- 如果需要滚动条 -->
      <!--<div class="swiper-scrollbar"></div>-->
    </div>

</template>

<script>

  export default {
    name: 'Wheel',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
        //  direction: 'vertical',
//	initialSlide :2,
        speed:700,
        loop: true,
        autoplay:4000,

        slidesPerView: 1,
        spaceBetween: -50,

        paginationClickable :true,
        autoplayDisableOnInteraction:false,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
//  nextButton: '.swiper-button-next',
//  prevButton: '.swiper-button-prev',

        // 如果需要滚动条
//  scrollbar: '.swiper-scrollbar',
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide{
    width: 70%;
    margin: 0 auto;
  }
.swiper-wrapper img{
  width: 84%;
  height: 100%;
  margin-left: 8%;
}

</style>
