<template>
    <div>
      <my-header></my-header>
      <my-section :videoList="videoNames"></my-section>
    </div>
</template>

<script type="text/ecmascript-6">
  import myHeader from "../components/video/Header.vue";
  import mySection from "../components/video/Section.vue";
  import data from "../axios/axios.js";

    export default {
      data(){
        return {
          videoNames:[]
        }
      },
      components:{
        myHeader,
        mySection
      },
      created:function () {
        data.Videodata((data)=>{
            this.videoNames = data;
        });
      }
    }
</script>


<style scoped>

</style>
