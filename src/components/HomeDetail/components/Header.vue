<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="show">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
        <div class="header" v-show="!show" :style="opacityStyle">
            <div class="header-left">
                <router-link to="/">
                    <div class="iconfont back-icon">&#xe624;</div>
                </router-link>
            </div>
            <div class="header-center">上海</div>
            <div class="header-right"></div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: "DetailHeader",
    data (){
        return {
            show:true,
            scrollTop:null,
            opacityStyle:{opacity:0}
        }
    },
    methods: {
        handlescroll (){
            console.log(1)
            if(document.documentElement.scrollTop>40){
                let a=document.documentElement.scrollTop/100  
                a = a>1 ? 1 : a
                this.opacityStyle={opacity:a}
                this.show=false
            }else{
                this.show=true
            }
        }
    },
    mounted (){
    },
    activated() { //这个是vue的keep alive功能,要在router-view标签外套一层keep alive标签,注意 这个是全局的
        window.addEventListener("scroll",this.handlescroll)
    },
    deactivated() { //在离开当前组件的时候执行的操作
        window.removeEventListener("scroll",this.handlescroll)
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/global.styl'
    .header-abs
        position:fixed
        z-index:1
        top:.1rem
        left:.1rem
        width:.8rem
        height:.8rem
        text-align:center
        border-radius:50%
        background:#666
        color:#fff
        line-height:.8rem
    .header
        position:fixed
        top:0
        left:0
        right:0
        color:#fff
        background:$bgcolor
        height:.86rem
        line-height:.86rem
        display:flex
        text-align:center

        a
            color:#fff  
        .header-left
            
            flex:1
        .header-center
            flex:8
        .header-right
            flex:1
</style>
