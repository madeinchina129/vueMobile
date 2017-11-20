<template>
    <section class="sectionCart">
        <ul class="list">
            <cart-products :idx="index"  :item="n" v-for="(n,index) in list"></cart-products>
        </ul>
    </section>

</template>
<script type="text/ecmascript-6">
    import cartProducts from "./cartProducts.vue";

    export default {
        props:["list","inc","de"],
        components: {
            cartProducts
        }
    }

</script>
<style scoped>
  .sectionCart{
    margin-top:8rem;
    background: #eff1f3;
    margin-bottom: 6rem;
  }

</style>
