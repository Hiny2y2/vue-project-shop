<template>
    <div class="wrap" @touchmove.prevent>
        <div class="container">
            <swiper :options="swiperOption">
                <swiper-slide><img class="swiper-img" src="https://img1.qunarzz.com/p/tts0/1811/ad/fde5984c436a7402.jpg_r_1280x840x90_98edc7bb.jpg" alt="" >
                </swiper-slide>
                <swiper-slide><img class="swiper-img" src="https://img1.qunarzz.com/p/tts5/1806/9e/316f34c7bf48eb02.jpg_r_1280x840x90_bb1aca01.jpg" alt="" >
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
        <div class="flag" @click="changeFlag">X</div> 
    </div>
</template>
<script>
export default {
    name:"Slideshow",
    props:{
        
    },
    data (){
        return {
            swiperOption:{
                autoplay:0,
                pagination : '.swiper-pagination',
                paginationType :'fraction'
            }
        }
    },
    methods:{
        changeFlag (){
            console.log('点了')
            this.$emit('changeFlagfalse',false)
        }
    },
    watch:{

    }
}
</script>
<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow:visible
    .wrap
        position:fixed
        top:0
        left:0
        right:0
        bottom:0
        background:rgba(10,10,10,.8)
        display:flex
        flex-direction:column
        justify-content:center
        z-index:9
        .container
            width:100%
            
            .swiper-img
                width:100%
            .swiper-pagination
                bottom:-30px
                color:#fff
        .flag
            width:.8rem
            height:.8rem
            text-align:center
            line-height:.8rem
            position:fixed
            bottom:.5rem
            left:50%
            right:0%
            margin-left:-.45rem
            color:#fff
            font-size:.5rem
            border:1px solid #fff
            border-radius:50%
            z-index:999
            
</style>
