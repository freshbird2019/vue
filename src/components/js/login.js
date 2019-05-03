import {getCookie, setCookie} from "./cookie";

export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        checked: false,
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
        tishi:'',
        showTishi: false,
        username: '',
        password: '',
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //* 忘记密码
      forget_PassWord(){

      },
      //* end of 忘记密码

      // 登陆
      login(formName) {
        console.log(formName.name);
        if(formName.name === "" ){
          alert("请输入用户名")
        }else{
         // var name=encodeURI(formName.name);
          let data = {'name':formName.name,'pw':formName.pass};
          /*接口请求*/
          //之前后端接受到的值是null，因为用get
          this.$http.post('http://127.0.0.1:8088/project/UserLogin',data).then((res)=>{
            console.log(res)
            if(res.data === 1){
              this.tishi = "该用户不存在"
              this.showTishi = true
            }else if(res.data === 2){
              this.tishi = "密码输入错误"
              this.showTishi = true
            }
            else{
              this.tishi = "登录成功"
              this.showTishi = true
              setCookie('username',formName.name,1000*60)
              setTimeout(function(){
                this.$router.push('/stu/s-timeline')
              }.bind(this),1000)
            }
          })
        }
      },

    },
  mounted(){
    /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    /* if(getCookie('username')){
       this.$router.push('/home')
     }*/
  },
  }
