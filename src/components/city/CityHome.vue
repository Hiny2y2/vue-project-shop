<template>
    <div>
        <Header></Header>
        <Search :citylist="citylist"></Search>
        <List :hotcity="hotcity" :citylist="citylist" :Alpha="Alpha"></List>
        <scroll-list :citylist="citylist" @getChild="handleAlpha"></scroll-list>
    </div>
</template>
<script>
import Axios from 'axios'
import Header from './components/cityHeader.vue'
import Search from './components/citySearch.vue'
import List from './components/cityList.vue'
import ScrollList from './components/scrollList'
export default {
    name:'Home',
    components:{
        Header,
        Search,
        List,
        ScrollList
    },
    data (){
        return {
            hotcity:[],
            citylist:{},
            Alpha:''
        }
    },
    methods : {
        getMsg (){
            Axios.get('/api/citylist.json').then(this.getMsgsuccess)
        },
        getMsgsuccess(msg){
            this.hotcity=msg.data.data.hotcities
            this.citylist=msg.data.data.cities
        },
        handleAlpha (e){
            this.Alpha=e
        }
    },
    mounted (){
        this.getMsg()
    }
}
</script>
<style lang="stylus" scoped>

</style>


