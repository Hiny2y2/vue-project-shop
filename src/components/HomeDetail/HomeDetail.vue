<template>
    <div>
        <banner @changeFlag="change"></banner>
        <fade>
            <SlideShow v-if="flag" @changeFlagfalse="changefalse" ></SlideShow>
        </fade>
        <Header msg="上海"></Header>
        <List :list="list"></List>
    </div>
</template>
<script>
import banner from './components/DetailBanner'
import SlideShow from '@/common/slideShow/slideshow'
import Header from './components/Header'
import List from './components/List'
import Fade from '@/common/fade/fade'
export default {
    name:"HomeDetail",
    data (){
        return {
           flag:false,
           list:[
               {
                   title:"成人票",
                   children:[
                       {title:"学生票1"}
                   ]
               
               },
               {title:"学生票"},
           ]
        }
    },
    methods: {
        change (val){
            
            this.flag=val
        },
        changefalse (val){
            console.log(1)
            this.flag=val
        }
    },
    components:{
        banner,
        SlideShow,
        Header,
        List,
        Fade
    }
}
</script>
<style lang="stylus" scoped>
    
</style>
