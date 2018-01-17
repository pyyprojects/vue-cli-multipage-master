<template>
  <div class="b-login">
      <div class="ui container">
        <div class="ui middle aligned center aligned grid">
          <div class="column">
            <h2 class="ui teal image header">
              <img src="http://www.semantic-ui.cn/examples/assets/images/logo.png" class="image">
              <div class="content">
                Log-in to your account
              </div>
            </h2>
            <form class="ui large form">
              <div class="ui stacked segment">
                <div class="field">
                  <div class="ui left icon input">
                    <i class="user icon"></i>
                    <input type="text" v-model="userForm.username" placeholder="请输入用户名">
                  </div>
                </div>
                <div class="field">
                  <div class="ui left icon input">
                    <i class="lock icon"></i>
                    <input type="password" v-model="userForm.password" placeholder="请输入密码">
                  </div>
                </div>
                <div class="field">
                  <div class="ui left icon input">
                    <input type="text" v-model="userForm.imageCode" placeholder="请输入验证码">
                    <img :src="imageCodeUrl" @click="refreshCode()"/>
                  </div>
                </div>
                <div class="ui fluid large teal submit button" @click="submitForm()">Login</div>
              </div>
              <div class="ui error message"></div>
            </form>

            <div ref="tipMsg" class="ui message" style="display: none">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

  import Vue from 'vue'
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  Vue.use(ElementUI)

  import axios from 'axios'

  export default {
    name: 'login',
    data (){
      return {
        // 用户表单对象
        userForm: {
          username: '',
          password: '',
          imageCode: ''
        },
        imageCodeUrl: '/api/code/image',                                // 图片验证码地址
        loginUrl:     '/api/authentication/login',                      // 登录地址
        homeUrl:      'http://localhost:8080/module/index.html#/blogs'         // 系统首页
      }
    },
    methods: {
      // 更新验证码
      refreshCode (){
         this.imageCodeUrl = '/api/code/image?' + new Date().getTime();
      },
      // 登录验证
      validateForm(){
        let username = this.userForm.username;
        let password = this.userForm.password;
        let imageCode = this.userForm.imageCode;
        
        if(username === ''){
            this.tipMsg('用户名不能为空');
            return false;
        }

        if(password === ''){
            this.tipMsg('密码不能为空');
            return false;
        }

        if(imageCode === ''){
            this.tipMsg('验证码不能为空');
            return false;
        }
        console.log(username + "," + password + "," + imageCode);

        return true;
      },
      // 提交表单
      submitForm (){
        let _this = this;
        if(_this.validateForm()){
          $.post(_this.loginUrl, _this.userForm, function(resp){
            if(resp.status == 0){
              console.log(resp.data);
              // 存储token信息
              sessionStorage.setItem("token", JSON.stringify(resp.data));
              // 存储用户名称
              sessionStorage.setItem('username', resp.data.principal.username);

              // 重定向到系统首页
              window.location.href = _this.homeUrl;
            }else{
              _this.tipMsg(resp.msg);
            }
          });
        }
      },
      // 错误提示
      tipMsg (msg){
        this.$message({
          message: msg,
          type: 'warning'
        });
      }
    }
  }
</script>

<style>
  body {
    background-color: #DADADA !important;
  }
  body > .grid {
    height: 100%;
  }
  .b-login{
    margin: 100px;
  }
  .image {
    margin-top: -100px;
  }
  .column {
    max-width: 450px;
  }
</style>
