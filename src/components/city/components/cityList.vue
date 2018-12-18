<template>
    <div class="wrap" ref="scrollWrap">
        <div>
            <div class="city">
                <div class="title">当前定位城市</div>
                <div class="list">
                    <div class="list-item">{{this.$store.state.city}}</div>
                </div>
            </div>
            <div class="city">
                <div class="title">热门城市</div>
                <div class="list">
                    <div class="list-item" v-for="items of hot" :key="items.id" @click="handleCityName(items.name)">{{items.name}}</div>
                </div>
            </div>
            <div class="city">
                <div v-for="(items,key) of list" :key="key" :ref="key">
                    <div class="title">{{key}}</div>
                    <div class="list" v-for="inneritems of items" :key="inneritems.id" @click="handleCityName(inneritems.name)">
                        <div class="list-city">{{inneritems.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Scroll from 'better-scroll'
export default {
    props:{
        hotcity:Array,
        citylist:Object,
        Alpha:String
    },
    data (){
        return {
            hot:[],
            list:{}
        }
    },
    methods: {
        handleCityName (e){
            this.$store.dispatch('changeCity',e)
            this.$router.push('/')
        }
    },
    mounted (){
        this.scroll=new Scroll(this.$refs.scrollWrap)
    },
    watch :{
        hotcity (val){
            this.hot=val
        },
        citylist (val){
            this.list=val
        },
        Alpha (a){
            let i=this.$refs[a][0]
            this.scroll.scrollToElement(i)  //插件better-scrool提供的方法,i是页面上的元素
            
        }
    }
}
</script>
<style lang="stylus" scoped>
    .wrap
        position:absolute
        top:1.46rem
        left:0
        right:0
        bottom:0
        overflow:hidden
        .title
            padding:.1rem
            background:#eee
        .list
            overflow:hidden
            padding-right:.4rem
            .list-item
                float:left
                margin:.1rem
                border-radius:5px
                text-align:center
                padding:.1rem 0
                width:28%
                border:1px solid #666
            .list-city
                padding:.15rem .1rem .15rem .1rem
                border-bottom:#ccc solid 1px
</style>
