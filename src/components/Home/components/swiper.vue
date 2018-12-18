<template>
    <div class='swiper-wrap'>
    <swiper :options="swiperOption" ref="mySwiper" v-if="swiperList">
        <swiper-slide v-for="img of swiperList" :key='img.id'><img class="swiper-img" :src="img.src" alt="" ></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>        
    </swiper>
    
    </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props:{
      swiperList:Array
  },
  methods:{
      
  },
  data() {
    return {
      swiperOption:{
          pagination: '.swiper-pagination',
          loop:true
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
    .swiper-wrap >>> .swiper-pagination-bullet-active
        background:red!important
    .swiper-img
        width:100%
</style>
