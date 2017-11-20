<template>
  <div class="loginWrapper">
    <div class="bd">
      <el-form :model="loginForm" :rules="loginRule" ref="loginForm">
        <el-form-item prop="userName">
          <el-input type="userName" v-model="loginForm.userName" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input v-model="loginForm.pwd" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')" class="submitBtn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="ft">
      <router-link to="/register">还没有账号？马上注册</router-link>
    </div>
  </div>
</template>

<script>
//  import { doLogin } from '../../lib/vueHelper'

  import  axios from "../../axios/axios.js";
  import  loginCookie from "../../assets/js/cookie.js";

  export default {
    name: 'login',
    data () {
      return {
        loginForm: {
          userName: '',
          pwd: ''
        },
        loginRule: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 16 个字符', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var dataLogin = {
              'userName': this.loginForm.userName,
              'passWord': this.loginForm.pwd
            };

            axios.Loginfn(dataLogin,(data)=>{
                if(data==1){

//          把用户名保存到cookie
                  loginCookie.SetCookie("user",dataLogin.userName,7);
                  this.$router.push("/");

                }else{
                  alert("用户名或密码错误！");
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
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    font-size: 2rem;
    margin-top: 9rem;
  }
  .loginWrapper .hd {
    width: 30rem;
  }
  .loginWrapper .hd h2 {
    font-weight: 400;
    color: #20A0FF;
  }
  .loginWrapper .hd p {
    font-size: 1.8rem;
    color: #1f2f3d;
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
