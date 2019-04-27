<template>
<div id="step4">
    <el-container>
        <el-header style="height:45px;">
        	<el-row>
  				<el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  				<el-col :span="12"><div class="grid-content bg-purple-light"><el-button type="primary" plain>一键下载</el-button></div></el-col>
			</el-row>
        </el-header>
        <el-main style="height:490px;padding:0">

<!---        列表     ---->

      <div class="block" style="text-align: center;">
        <el-container style="height: 450px;text-align: center;">
          <el-main style="border-radius:25px;">
            <el-row :gutter="20"  v-for="(list,indexs) in imgs_list" :key="indexs">
              <el-col :span="4" v-for="(img,index) in list" :key="index"><div  class="grid-content bg-purple"><img :src="img.img" style="height: 120px;"/></div></el-col>
              <el-col :span="0"><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>
          </el-main>
        </el-container>
        <el-pagination @size-change="handleSizePage" @current-change="handleCurrentChange" 
        :current-page="currentPage" background layout="prev ,pager , next" :total="totalpage *10">
        </el-pagination>
      </div>

<!---        列表     ---->

        </el-main>
        <el-footer  style="padding:0;border:0;height:35px;">
        	<el-button type="primary" icon="el-icon-arrow-left" @click="returnB()">返回</el-button>
        </el-footer>

    </el-container>
</div>
</template>
 
<script>
export default{
    data(){
        return{
        	imgs_list:[[],[],[]],
        	imgs:[],
        	currentPage : 1 ,
        	totalpage : 0,
        };
    },
    methods:{
        initUsers : function(){
        for (var i=0;i<3;i++)
        {
          this.imgs_list[i] = this.imgs.slice(i*6,i*6+6);
          //alert(i+" "+this.imgs_list[i].length);
        }
      },
      // 初始化总页数
      inittotalpage  : function(){
        this.totalpage = this.imgs.length/18;
      },
    // 改变页面 这时候数据也会改变
      handleCurrentChange (val) {
        //alert(val);
        this.currentPage = val;
        for (var i=0;i<3;i++)
        {
          var temp=(this.currentPage-1)*18+i*6;
          this.imgs_list[i] = this.imgs.slice(temp,temp+6);
        }
      },
      //从后台获取图片
      /* 放入"imgs"中*/
      getPic(){

      },
      //end of 从后台获取图片
      returnB(){
      	this.$router.push({path:'/test/'});
      },
    },
    mounted (){
    	this.getPic();
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
 
<style  scoped>
.el-main{
    width: -webkit-fill-available;
}
.el-header{
	text-align: right;
}
.el-header>.el-row>.el-col>.grid-content {
    border-radius: 4px;
    min-height: 30px;
}
.el-row {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
.el-main>.el-row>.el-col>.bg-purple {
    //background: #d3dce6;
     box-shadow: 0 2px 12px 0 #03a9f43b;
  }
.el-main>.el-row>.el-col>.grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>