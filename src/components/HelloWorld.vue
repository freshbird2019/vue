<template>
  <div class="hello">
    
  <el-container>
    <el-aside width="220px"></el-aside>
    <el-main>
      <div class="block">
        <span class="demonstration">  </span>
        <el-carousel height="250px">
        <el-carousel-item v-for="item in imgs" :key="item">
        <div> <img :src="item.img"/> </div>
        </el-carousel-item>
        </el-carousel>
      </div>
    </el-main>
  </el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgs:[{img:require("./img/img1.jpg")},{img:require("./img/img2.jpg")},{img:require("./img/img3.jpg")}]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img{
  height:600px;
}
.block{
  width:900px;
}
.demonstration{
  
}
</style>
