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
        ruleForm: {
          name:'',
          pass: '',
          checkPass: '',
          phone:'',
          email: '',
          age: '',
          sex:'',
          address:'',
          hos:''
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
        tishi:"",
        showTishi:false
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
      Register(){


          let data = this.ruleForm;
          console.log(data);
        this.$ajax({
          method: 'post',
          url: 'http://127.0.0.1:8088/project//UserRegister',
          data: data,
          dataType:'json',
          contentType: "application/json;charset=utf-8",
        }).then((res) => {
            console.log(res)
            if (res.data === true) {

              console.log(res.data)
              this.tishi = "注册成功"
              this.showTishi = true;

              /*注册成功之后再跳回登录页*/
              setTimeout(function () {
                this.$router.push('/login')
              }.bind(this), 1000)
            }
          })

      }

    }
  }
