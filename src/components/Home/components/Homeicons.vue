<template>
        <swiper :options="swiperOption">
            <swiper-slide v-for='(page,index) of pages' :key='index'>
                <div class="icons-item" v-for='item of page' :key='item.id' >
                    <div class="icons-img">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="icons-content" >{{item.desc}}</div>
                </div>
            </swiper-slide>
        </swiper>

</template>
<script>
export default {
    name:'Homeicons',
    props:{
        Homeicona:Array
    },
    data () {
        return {
            swiperOption:{
                
            },
            a:this.Homeicona,
        }
    },
    computed:{
        pages (){
            const Urlpages=[]
            this.a.forEach((item,i) => {
                const page=Math.floor(i/8)
                if(!Urlpages[page]){
                    Urlpages[page]=[]
                }
                Urlpages[page].push(item)
                
            })
            return Urlpages
        }
    },
    watch :{
        Homeicona (val){
            this.a=val
        }
    }
}
</script>
<style lang='stylus' scoped>
    div
        overflow:hidden
        height:0
        padding-bottom:50%
        .icons-item
            float:left
            width:25%
            overflow:hidden
            padding-bottom:25%
            position:relative
            .icons-img
                position:absolute
                width:100%
                height:50%
                img
                    width:70%
                    display:block
                    padding-top:.1rem
                    margin:0 auto
        .icons-content
            position:absolute
            width:100%
            bottom:-.6rem
            font-size:.3rem
            text-align:center
            overflow:hidden
            white-space:nowrap
            text-overflow:ellipsis
</style>
