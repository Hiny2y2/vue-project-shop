<template>
  <div class='header'>
    <div class="header-left">
        <div class='iconfont back-icon'>&#xe624;</div>
    </div>
    <div class="header-input"><span class='iconfont'>&#xe632;</span>搜索</div>
    <div class="header-right">
        <router-link to="/city">{{this.$store.state.city}}<span class='iconfont arrow-down-icon'>&#xe64a;</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
    }
  },
  props:{
      city:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
    @import '~styles/global.styl'
    .header
        display:flex
        height: .86rem
        line-height: .86rem
        color:#fff
        background:$bgcolor
        .arrow-down-icon
            margin-left:.1rem
        .header-left
            width: .64rem
            
            .back-icon
                text-align: center
                font-size: .4rem
        .header-right
            min-width: 1rem
            padding:0 .1rem
            text-align:center
            a
                color:#fff
            .arrow-down-icon
                font-size: .15rem
        .header-input
            flex:1
            background:#fff
            border-radius:4px
            height: .64rem
            line-height: .64rem
            margin-top: .11rem
            vertical-align:top
            color: #ccc
            padding:0 .1rem
            input
                width:100%
                height:80%
</style>
