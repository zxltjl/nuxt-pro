<template>
    <div>
        这是详情页面
    </div>
</template>

<script>
export default {
    layout:'mani',
    head(val){
        return  {
            titleTemplate: this.title,
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Meta description' }
            ]
        }
    },
    asyncData(val) {
        return {
            title:'dasdasdasdasd'
        }
    },
    mounted(){
        setTimeout(()=>{
            this.title = '大你收到阿萨德傻得可怜'
        },200)
        console.log(this)
    }
}
</script>

<style>

</style>