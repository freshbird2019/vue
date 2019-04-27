<template>
  <div id="step2">
  <el-container>

    <el-aside width="260px" style="background-color:gray;">
      
      <div class="block" style="" >
        <el-card class="box-card" >
          <div slot="header" class="clearfix">
            <span>图片</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="clear_all()">清空</el-button>
          </div>
          <el-container style="height: -webkit-fill-available;">
            <el-main style="height: -webkit-fill-available;">
              <div class="block">
                <div v-for="(img,index) in imgs_list" :key="img.name" class="text item" >
                <el-radio v-model="img.radio" @change="delete_img(index)"></el-radio>
                <img :src="img.img"/>
                </div>
              </div>
            </el-main>
            <el-footer style="">
              <el-pagination small @size-change="handleSizePage" @current-change="handleCurrentChange" 
              :current-page="currentPage" background layout="prev ,pager , next" :total="totalpage *7">
              </el-pagination>
            </el-footer>
          </el-container>
        </el-card>
      </div>

    </el-aside>
    <el-main style="padding:0;border:0;">
        <div id="img_name">
        <ul>
            <li><div><img :src="avatar" class=""></div></li>
            <li><input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage($event)">
            </li>
        </ul>
        </div>
    </el-main>


</el-container>
  </div>
</template>
 
<script src="./js/step2.js">

 
</script>
 
<style scoped src="./CSS/step2.css">
 
</style>