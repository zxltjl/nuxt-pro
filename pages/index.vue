<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        pro
      </h1>
      <div class="links">
        <NuxtLink to="/">首页1111</NuxtLink>
        <NuxtLink to="/detail">详情{{name}}</NuxtLink>
        <AButton type="primary" @click="login">登录</AButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    asyncData(val) {
        
    },
    data(){
        return {
            name:'dasdasdasdasd'
        }
    },
    computed:{
        ...mapState('app',{
            ss:state=>state.ss
        })
    },
    methods:{
        login(){
            console.log(this.$store);
        }
    }
}
</script>

<style lang="less">
.red{
    color:red;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
