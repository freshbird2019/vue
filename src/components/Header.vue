<template>
  <div id="header">
  	<el-row :gutter="20">
  	<el-col :span="20"><div class="header_titles">
        在线医疗辅助系统
    </div></el-col>
  	<el-col :span="4"><div class="grid-content">
  		<ul>
  			<li><img src="./img/hospital.png"></li>
  			<li>
  				<ul><li @click="clickRouter(0)" id="a" @mouseover="changeMaska(true)" @mouseout="changeMaska(false)">登陆</li>
            <li>|</li>
            <li @click="clickRouter(1)" id="b" @mouseover="changeMaskb(true)" @mouseout="changeMaskb(false)">注册</li></ul>
  			</li>
  		</ul>
  	</div></el-col>
	</el-row>
	<el-row :gutter="20">
  	<el-col :span="24"><div class="grid-content bg-purple">
  		<ul>
  			<li  @click="clickRouter(2)" v-bind:class="{ bind_underline:where===2 }">首页</li>
  			<li v-bind:class="{bind_underline:where===3}"  @click="clickRouter(3)">在线测试</li>
  			<li v-bind:class="{ bind_underline:where===4 }"  @click="clickRouter(4)">在线检测</li>
  		</ul>
  	</div></el-col>
	</el-row>
  </div>
</template>
 
<script src="./js/Header.js">

 
</script>
 
<style scoped src="./CSS/Header.css">
 
</style>
