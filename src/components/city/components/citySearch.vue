<template>
    <div>
        <div class="search">
            <input type="text" placeholder="请输入城市/拼音" v-model="searchKey">
        </div>
        <div class="search-result" ref="searchlist" v-show="searchKey">
            <ul>
                <li class="search-result-items" v-for="items of searchList" :key="items.id" @click='handleCityName(items.name)'>{{items.name}}</li>
                <li class="search-result-items" v-if="!searchList.length">没有找到结果</li>
            </ul>
            
        </div>
    </div>
</template>
<script>
import betterScroll from 'better-scroll'
export default {
    
    props:{
        citylist:Object
    },
    data (){
        return {
            searchKey:'',
            list:[],
            limiter:null,
            searchList:[]
        }
    },
    methods: {
        handleCityName (e){
            this.$store.dispatch('changeCity',e)
            this.$router.push('/')
        }
    },
    watch: {
        citylist (val){
            this.list=val
        },
        searchKey (key){
            if(!this.searchKey){
                this.searchList=[]
                return
            }
            if(this.limiter){
                clearTimeout(this.limiter)
            }
            const result = []
            this.limiter=setTimeout( () => {
                for(let i in this.list){
                    this.list[i].forEach(items => {
                        if(items.spell.indexOf(this.searchKey)>-1 || items.name.indexOf(this.searchKey)>-1){
                            result.push(items)
                        }
                    })
                }
            },5)
        this.searchList=result
        
            
        }
    },
    updated (){
        this.ascroll = new betterScroll(this.$refs.searchlist)
    }
}
</script>
<style lang="stylus" scoped>
    .search
        background:#ccc
        padding:.1rem .1rem
        text-align:center
        input 
            text-align:center
            box-sizing:border-box
            width:100%
            border-radius:.05rem
            padding:0 .1rem
    .search-result
        overflow:hidden
        background:#eee
        position:absolute
        top:1.45rem
        bottom:0
        left:0
        right:0
        z-index:2
        padding:.1rem 0
        .search-result-items
            padding:.15rem 
            border-bottom:1px solid #ededed
            background:#fff
        
</style>
