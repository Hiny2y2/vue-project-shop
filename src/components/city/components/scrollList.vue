<template>
    <ul>
        <li v-for="items of listcities" 
        :key="items" :ref="items" 
        @click="getAlpha" 
        @touchstart.prevent="touchstart" 
        @touchmove="touchmove" 
        @touchend="touchend">{{items}} <span class="big-tips" ref="alph">{{items}}</span> </li>
    </ul>
</template>
<script>
export default {
    props:{
        citylist:Object
    },
    data (){
        return {
            list:{},
            touchFlag:false,
            timer:null
        }
    },
    computed: {
        listcities (){
            const letters=[]
            for (var i in this.list){ //循环json文件中的cities,只把key值传入letters数组中
                letters.push(i)
            }
            return letters
        }
    },
    methods :{
        getAlpha (e){
            this.$emit('getChild',e.target.innerText)
            
        },
        touchstart (e){
            this.touchFlag=true
            
        },
        touchmove (e){
            const leftAlph = this.$refs.alph
            if(this.touchFlag){
                if (this.timer){
                    clearTimeout(this.timer)
                }
                    this.timer=setTimeout(() => {
                        let i =Math.floor((e.touches[0].clientY-73 - this.$refs['A'][0].offsetTop)/20) //这个20是代表每个li的高度,73是ul顶部到窗口顶部的距离
                        if(i>=0 && i<this.listcities.length){
                            console.log(leftAlph[i].innerText)
                            for(let j = 0 ;j<leftAlph.length;j++){ //循环span标签,然后全部去除掉样式
                                 leftAlph[j].classList.remove('block')
                            }
                            leftAlph[i].classList.add('block')  //去掉所有span的样式后,再加上单个span的样式
                            this.$emit('getChild',this.listcities[i])
                        }
                    },15)
            }
            
            
        },
        touchend (e){
            const leftAlph = this.$refs.alph
            if (this.timer){
                    clearTimeout(this.timer)
            }
            this.timer = setTimeout(()=>{
                for(let j = 0 ;j<leftAlph.length;j++){
                        leftAlph[j].classList.remove('block')
                }            
            },15)
  
            console.log('end')
            this.touchFlag=false
           

        }
    },
    watch :{
        citylist (val){
            this.list=val
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/global'
    ul
        position:fixed
        right:0
        padding-top:1rem
        height:100%
        li
            color:$bgcolor
            padding:.104rem .1rem
            line-height:.2rem
            position:relative
            
            .big-tips
                position:absolute
                left:-2rem;
                top:-50%;
                font-size:.5rem
                line-height:.3rem
                background:#fff
                box-shadow:#ccc 0px 0px 10px
                padding:.2rem
                width:.3rem
                height:.3rem
                display:none
            .block
                display:block
                
            .big-tips::after
                content:''

</style>
