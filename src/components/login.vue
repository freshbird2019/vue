<template>
  <div id="login">
    <div class="title">Fill in the form to login into Web</div>
    <div id="Login_Table">
    <div id="Login_Name">Login into </div>
    <div id="Login_Ul">
      <p v-show="showTishi" align="center">{{tishi}}</p>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="账号">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="login(ruleForm)">提交</el-button>
    <el-checkbox v-model="checked">记住密码</el-checkbox>
  </el-form-item>
</el-form>
        <div @click="forget_PassWord()">Forgot your password?</div>
    </div>
    </div>
  </div>
</template>
 
<script src="./js/login.js">
 
</script>
 
<style scoped src="./CSS/login.css">
 
</style>
