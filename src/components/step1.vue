<template>
<div id="step1">
	<el-container>
		<el-header style="">声明</el-header>
		<el-main style="">
			<el-row>
  				<el-col :span="17"><div class="grid-content bg-purple-dark">
  					免责事项:因为上传图片而发生任何损失,本系统都不负责任。
  					<br/>
  					本隐私声明的执行：如果您对本隐私声明有任何疑问，请通过点击联系我们链接与我们取得联系 
  					<br/>
  					本隐私政策与您所使用的本网站的服务以及该服务所包括的各种业务功能息息相关，希望您在使用我们的产品与/或服务前仔细阅读并确认您已经充分理解本政策所写明的内容，并让您可以按照本隐私政策的指引做出您认为适当的选择。
  					<br/>
  					您使用或在我们更新本隐私政策后（我们会及时提示您更新的情况）继续使用我们的产品与/或服务，即意味着您同意本隐私政策(含更新版本)内容，并且同意我们按照本隐私政策收集、使用、保存和共享您的相关信息。
  				</div></el-col>
			</el-row>
		</el-main>
	</el-container>
</div>
</template>
 
<script>
export default{
    data(){
        return{
            
        };
    },
    components: {
        
    }
}
 
</script>
 
<style scoped>
.el-container{
 	height: -webkit-fill-available;
 }
 .el-main{
 	font-size:1.2em;
 	text-align: center;
 	padding:0 200px 0 200px;
 }
.el-header{
	font-size:2em;
	text-align: center;
}
.el-row {
    margin-bottom: 5px;
    //background: blue;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    padding:40px;
    width: -webkit-fill-available;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .bg-purple-dark {
    //background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 180px;
    line-height:29px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>