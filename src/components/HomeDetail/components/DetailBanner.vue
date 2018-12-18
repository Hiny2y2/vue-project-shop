<template>
    <div>
        <div class="banner" @click="handleSlideON">
            <img src="http://img1.qunarzz.com/qs/1811/e0/02cc883476468402.jpg" alt="">
            <div class="banner-info">5A级景区5A级景区5A级景区</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"DetailBanner",
    methods: {
        handleSlideON (){
            this.$emit('changeFlag',true)
        }
    }
}
</script>
<style lang="stylus" scoped>
    .banner
        height:2.5rem
        position:relative
        img 
            width:100%
            height:100%
        .banner-info
            position:absolute
            bottom:0
            background:linear-gradient(rgba(0,0,0,0),#666)
            padding:.1rem 0 .1rem .1rem
            line-height:.3rem
            color:#fff
            width:100%
</style>
