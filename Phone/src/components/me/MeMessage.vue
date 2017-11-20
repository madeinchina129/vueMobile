<template>
  <div class="pic">
    <div class="p_left">
      <!--<img src="../../assets/default_avatar.png" alt=""/>-->

      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

    </div>
    <div class="p_mi">
      <div class="noLogin" v-if="this.userName==false">
        <p class="p_mi_p">未登录</p>
        <div class="pic_bo">
          <p @click="go(5)">注册</p>
          <p @click="go(6)">登录</p>
        </div>
      </div>
      <div class="sLogin" v-else>
        <p class="p_mi_p">{{this.userName}}</p>

        <div class="pic_bo">
          <p >普通会员</p>
          <a @click="userQuit">退出</a>
        </div>

      </div>
    </div>
    <div class="p_right">
      编辑个人信息 >
    </div>
  </div>
</template>
<!--<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@1.4.6/lib/index.js"></script>-->
<script type="text/ecmascript-6">

  import  cookie from "../../assets/js/cookie.js";

  export default {

      data() {
        return {
          imageUrl: '',
          userName:"123"
        };
      },
      created(){
        this.userName = cookie.GetCookie("user");
      },
      methods:{
        userQuit(){
           cookie.RemoveCookie("user");
           this.$router.push("/login");

        },
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        },
        go:function (flag) {
          if(flag ==5){
            this.$router.push("/register")
          }else if(flag ==6){
            this.$router.push("/login")
          }
        }
      }
    }
</script>



<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed white;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 20;
  }
  .avatar-uploader .el-upload:hover {
    border-color: red;
    z-index: 25;
  }
  .avatar-uploader-icon {
    font-size: 40px;
    color: white;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    z-index: 20;
  }
  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
  .pic{
    margin-top: 2.3rem;
    width: 100%;
    /*height: 200px;*/
    background: url("../../assets/my_head_bg.png") no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.25rem;
    padding-bottom: 5.1rem;
    position: absolute;
    top: 0rem;
  }
  .p_left img{
    width: 4.3rem;
    height: 4.3rem;
    border-radius: 50%;
    margin-left: 1rem;
  }
  .p_mi{
    color: white;
    display: flex;
    flex-direction: column;
    margin-left: -2rem;
  }
  .p_mi_p{
    font-size: 1.8rem;
  }
  .pic_bo{
    display: flex;
    flex-direction: row;
  }
  .pic_bo a{
    color: white;
  }
  .pic_bo p{
    margin-right: 1rem;
  }
  .p_right{
    color: #a9dffe;
    margin-right: 1.1rem;
  }
</style>
<!--
<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
-->
