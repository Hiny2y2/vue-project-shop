<template>
    <div class="header">
        <div class="header-left">
            <router-link to="/">
                <div class="iconfont back-icon">&#xe624;</div>
            </router-link>
        </div>
        <div class="header-center">选择城市</div>
        <div class="header-right"></div>
    </div>
</template>
<script>
export default {
    name:'cityHeader'
}
</script>
<style lang="stylus" scoped>
    @import '~styles/global.styl'
    .header
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
