<template>
    <div>
        <div v-for="(items,index) of list" :key="index">
            <div class="title">{{items.title}}</div>
            <div v-if="items.children">
                <detail-list :list="items.children" >
                    
                </detail-list>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"DetailList",
    props:{
        list:Array
    }
}
</script>
<style>

</style>
