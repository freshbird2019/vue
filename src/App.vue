<template>
  <div id="app">
    <!-- 其他页 -->
    <el-container>
      <el-header style="height: 110px;padding:0px;margin-bottom:20px;">
        <!-- 导航栏 -->
          <header-nav ></header-nav>
      </el-header>
      <el-main >
        <!-- Body -->
         <router-view></router-view>
      </el-main>
    </el-container>

    <el-footer>
      <Footer></Footer>
    </el-footer>
   </div>
</template>
 
<script>
import header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default{
    data(){
        return{
            
        };
    },
    components: {
        headerNav: header,
        Footer:Footer,
    }
}
 
</script>
 
<style scoped>
 #app{
  width:100%;
  height: -webkit-fill-available;
  
 }
 .el-container{
  //background-color: red;
 }
 .el-container>.el-container{
  
 }
 .el-main{
  //background-color: blue;
  //background: url('./components/img/index.jpg');
 }
 .el-footer{
  //background-color: blue;
 }
 .Footer{
  
 }
</style>