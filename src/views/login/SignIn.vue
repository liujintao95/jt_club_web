<template>
  <div class="login_container">
    <div class="background">
      <div class="login">
        <div class="form-logo">
          <img src="../../assets/logo.svg" alt="Amazing" />
        </div>
        <div class="platform">锦涛社</div>
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="45px"
            class="demo-ruleForm"
        >
          <el-form-item label="账号" prop="account">
            <el-input v-model="ruleForm.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
                type="password"
                v-model="ruleForm.password"
                @keyup.enter="login()"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button
            type="warning"
            @click="login()"
            style="width: 100%; margin: 15px 0 0 0"
        >登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue';
import Router from "@/router";
import Api from "@/api/login";
import Websocket from "@/utils/websocket";
import type { FormInstance, FormRules } from 'element-plus';
import type { LoginReq } from '@/api/login/model/login';
import {ElNotification} from "element-plus";

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  account: "",
  password: "",
})
const checkAccount = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("帐号不能为空"));
  }
  setTimeout(() => {
    if (/[\u4e00-\u9fa5]+/.test(value)) {
      callback(new Error("帐号不能包含中文"));
    } else {
      callback();
    }
  }, 200);
}
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("密码不能为空"));
  } else {
    callback();
  }
}
const rules = reactive<FormRules<typeof ruleForm>>({
  account: [{validator: checkAccount, trigger: "blur"}],
  password: [{validator: validatePass, trigger: "blur"}],
})
const login = () => {
  const data: LoginReq =  {
    account: ruleForm.account,
    password: ruleForm.password,
  }
  Api.login(data).then((res) => {
    let user = res.data.data
    Websocket.initWebSocket(user.token)
    localStorage.setItem("Authorization", `${user.type} ${user.token}`)
    Router.push({path: "/home"})
  }).catch(err => {
    console.log(err)
    ElNotification({
      title: '',
      message: "登录错误：" + err,
      type: 'error',
      duration: 0,
    });
  })
}
</script>

<style lang='scss' scoped>
.login_container {
  width: 100%;
  height: 100%;
  .background {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    .login {
      width: 340px;
      height: 330px;
      margin-top: 25vh;
      padding: 0 20px 10px 20px;
      box-sizing: border-box;
      background: #fff;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 10px;
      box-shadow: 0 0 15px #ffdead;
      .form-logo {
        margin: -65px auto 10px;
        width: 100px;
        height: 100px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 5px solid #fff;
        overflow: hidden;
        box-shadow: 0 0 20px #ffdead;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 90%;
        }
      }
      .platform {
        font-size: 22px;
        color: #ffa500;
        line-height: 36px;
        text-align: center;
        padding-bottom: 30px;
      }
    }
  }
}
</style>