  <template>
  <div class="loginWrapper">

  <div class="bd">
    <el-form :model="registerForm" :rules="registerRule" ref="registerForm">
    <el-form-item prop="userName">
    <el-input type="userName" v-model="registerForm.userName" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="pwd">
    <el-input v-model="registerForm.pwd" placeholder="密码" type="password"></el-input>
    </el-form-item>
    <el-form-item prop="checkPwd">
    <el-input v-model="registerForm.checkPwd" placeholder="请再次输入密码" type="password"></el-input>
    </el-form-item>

  <el-form-item>
  <el-button type="primary" @click="submitForm('registerForm')" class="submitBtn">立即注册</el-button>
    </el-form-item>
    </el-form>
    </div>
    <div class="ft">
    <router-link to="/login">已经有账号去登录</router-link>
  </div>
  </div>
  </template>

  <script type="text/ecmascript-6">

    import  axios from "../../axios/axios.js"

    export default {
    name: 'register',
    data () {
      var validateUser = (rule, value, cb) => {
        var pattern = /^[\w\u4e00-\u9fa5]{3,10}$/g
        if (value === '') {
          cb(new Error('请输入用户名'))
        } else if (!pattern.test(value)) {
          cb(new Error('请输入3-10个字母/汉字/数字/下划线'))
        } else {
          cb()
        }
      }
      var validatePwd = (rule, value, cb) => {
        var pattern = /^\S{3,20}$/g
        if (value === '') {
          cb(new Error('请输入密码'))
        } else if (!pattern.test(value)) {
          cb(new Error('请输入3-20个非空白字符'))
        } else {
          if (this.registerForm.checkPwd !== '') {
            this.$refs.registerForm.validateField('checkPwd')
          }
          cb()
        }
      }
      var validateCheckPwd = (rule, value, cb) => {
        if (value === '') {
          cb(new Error('请再次输入密码'))
        } else if (value !== this.registerForm.pwd) {
          cb(new Error('两次输入密码不一致!'))
        } else {
          cb()
        }
      }
      return {
        registerForm: {
          userName: '',
          pwd: '',
          checkPwd: '',
          email: '',
          captcha: ''
        },
        registerRule: {
          userName: [
            { validator: validateUser, trigger: 'blur' }
          ],
          pwd: [
            { validator: validatePwd, trigger: 'blur' }
          ],
          checkPwd: [
            { validator: validateCheckPwd, trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      captchaMsg () {
        return this.$store.getters.getCaptchaMsg
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let dataRegister = {
              'userName': this.registerForm.userName,
              'passWord': this.registerForm.pwd
            };
            axios.Registerfn(dataRegister,(data)=>{
              if(data==1){
                this.$router.push("/login");
              }else{
                alert("注册失败，请重新注册！");
              }
            });

          } else {
            return false
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loginWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 9rem;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  }
  .loginWrapper .bd {
    width: 25rem;
  }
  .loginWrapper .bd .submitBtn {
    width: 100%;
  }
  .loginWrapper .bd .el-form-item:last-child {
    margin-bottom: 1.5rem;
  }
  .loginWrapper .ft {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 25rem;
  }
  .loginWrapper .ft a {
    font-size: 1.5rem;
    text-decoration: none;
    color: #20A0FF;
  }
</style>
