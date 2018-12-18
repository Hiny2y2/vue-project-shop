<template>
  <div>
    <Header :city="city"></Header>
    <Swiper :swiperList="HomeSwiperList"></Swiper>
    <Homeicons :Homeicona="Homeicon"></Homeicons>
    <Homerecommend :weekend="weekend"></Homerecommend>
    <Articlecomponent :art="arts"></Articlecomponent>
  </div>
</template>
<script>
import axios from 'axios'
import Header from './components/header'
import Swiper from './components/swiper'
import Homeicons from './components/homeicons'
import Homerecommend from './components/Homerecommend'
import Articlecomponent from './components/article'
export default {
  name: 'Home',
  data () {
    return {
      city:'',
      HomeSwiperList:null,
      Homeicon:[],
      weekend:[],
      arts:[]
    }
  },
  methods : {
    getMsg(){
      axios.get('/api/test.json').then(this.getSuccess)
    },
    getSuccess(msg){
      const data=msg.data.data
      this.city=data.city
      this.HomeSwiperList=data.swiperList
      this.Homeicon=data.HomeIcons
      this.weekend=data.weekendrecommend
      this.arts=data.art
    }
  },
  mounted (){
    this.getMsg()
  },
  components: {
    Header,
    Swiper,
    Homeicons,
    Homerecommend,
    Articlecomponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
