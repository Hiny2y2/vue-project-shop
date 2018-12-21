<template>
    <div>
        <Header msg="评论"></Header>
        <div class="abc"></div>
    </div>
</template>
<script>
import Header from './../HomeDetail/components/Header'
export default {
    name: 'Comment',
    components :{
        Header
    }
}
</script>
<style lang="stylus" scope>
    .abc
        height:1000px
</style>
