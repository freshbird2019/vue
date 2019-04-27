<template>
  <div id="step3">
    <el-container>
  <el-container>
    <el-main >
      <div class="block" style="">
        <el-container style="height: 410px;">
          <el-main style="border-style: dashed;
  border-color: #2196F3; 
  border-radius:25px;">
            <el-row :gutter="20"  v-for="(list,indexs) in imgs_list" :key="indexs">
              <el-col :span="6" v-for="(img,index) in list" :key="index"><div  class="grid-content bg-purple"><img :src="img.img" style="height: 120px;"/></div></el-col>
              <el-col :span="0"><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>
          </el-main>
        </el-container>
        <el-pagination @size-change="handleSizePage" @current-change="handleCurrentChange" 
        :current-page="currentPage" background layout="prev ,pager , next" :total="totalpage *10">
        </el-pagination>
      </div>

    </el-main>
  </el-container>
</el-container>
  </div>
</template>
 
<script>
window.addEventListener('imgs', function (e) {
　　alert("change");
})
export default{
    data(){
        return{
          length:0,
          imgs:[],
          currentPage : 1 ,
          imgs_list : [[],[],[]] ,
          totalpage : 0
        };
    },
    components: {
        
    },
    methods:{
      initUsers : function(){
        for (var i=0;i<3;i++)
        {
          this.imgs_list[i] = this.imgs.slice(i*4,i*4+4);
          //alert(i+" "+this.imgs_list[i].length);
        }
      },
      // 初始化总页数
      inittotalpage  : function(){
        this.totalpage = this.imgs.length/12
      },
    // 改变页面 这时候数据也会改变
      handleCurrentChange (val) {
        //alert(val);
        this.currentPage = val;
        for (var i=0;i<3;i++)
        {
          var temp=(this.currentPage-1)*12+i*4;
          this.imgs_list[i] = this.imgs.slice(temp,temp+4);
        }
      },
    },
    mounted (){
    this.imgs = JSON.parse(localStorage.getItem('imgs'));
    this.length=this.imgs.length;
    this.initUsers();
    this.inittotalpage ();
    },
    watch:{
        'length':function(val){
        //alert(val);
        this.initUsers();
        this.inittotalpage();
        },
    }
}
 
</script>
 
<style scoped>
.block{
  text-align:center;
}
 .el-main{
 	height: -webkit-fill-available;
  padding:10px 20px 10px 20px;
  //padding:20px;
 }
   .el-row {
    margin-bottom: 2px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #6b9fd952;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>