<template>
  <div id="app" v-cloak>
    <router-view/>
    <chick-footer></chick-footer>
  </div>
</template>

<script>
  import ChickFooter from "./components/common/ChickFooter.vue";



  export default {
  name: 'app',
    components:{

      ChickFooter
    },


}
</script>

<style>
  [v-cloak] {
    display: none;
  }
</style>
