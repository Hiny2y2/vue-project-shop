<template>
    <div>
        <div class="hot-sale">热销推荐</div>
        <router-link tag="div" :to="'/detail/'+item.id" class="items" v-for="item of weekend" :key="item.id">
            <img :src="item.imgUrl" alt="">
            <p class='items-title'>{{item.title}}</p>
            <p class='items-desc'>{{item.desc}}</p>
            <div class="in">查看详情</div>
        </router-link>
        <div class="more">点击查看更多~</div>
    </div>
</template>
<script>
export default {
    props:{
        weekend:Array
    },
    data (){
        return {
        }
    }
}
</script>
<style lang='stylus' scoped>
    .hot-sale
        padding:.2rem
        background:#ccc
        font-weight:bold
    .more
        text-align:center
        font-weight:bold
        padding:.2rem  0
        color:#66ccff
    .items
        margin:.25rem .25rem 0rem .25rem
        padding-bottom:.1rem
        overflow:hidden
        border-bottom:1px solid #ccc
        img
            width:1.5rem
            height:1.5rem
            float:left
            margin-right:.2rem
        .items-title
            padding-top:.1rem
            font-weight:bold
            overflow:hidden
            white-space:nowrap
            text-overflow:ellipsis
        .items-desc
            padding-top:.15rem
            margin-bottom:.1rem
            overflow:hidden
            text-overflow:ellipsis
            display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
            -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
            -webkit-line-clamp: 2; /** 显示的行数 **/
        .in
            display:inline-block
            line-height:.4rem
            border-radius:.3rem
            text-align:center
            width:1.5rem
            height:.4rem
            background:orange
            color:#fff
            font-size:.25rem
</style>

