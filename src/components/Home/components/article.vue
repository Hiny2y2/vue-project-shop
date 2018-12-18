<template>
    <div class='artcle'>
        <div class="where">周末去哪儿玩</div>
        <div class="items" v-for="items of art" :key="items.id">
            <img :src="items.imgUrl" alt="">
            <p class='items-title'>{{items.title}}</p>
            <p class='items-desc'>{{items.desc}}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'Articlecomponent',
    props:{
        art:Array
    },
    data (){
        return {
            
        }
    }
}
</script>
<style lang='stylus' scoped>
    .artcle
        background:#ccc
        .where
            padding:.2rem
            font-weight:bold
        .items
            margin-bottom:.1rem
            box-shadow:#666 0 1px 2px
            background:#fff
            .items-title
                padding:.15rem
                font-weight:bold
                font-size:.3rem
            .items-desc
                padding:0 .15rem .15rem .15rem
                overflow:hidden
                text-overflow:ellipsis
                white-space:nowrap
                color:#ccc
            img
                width:100%
                height:3rem
</style>

