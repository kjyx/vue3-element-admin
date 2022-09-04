<template>
  <div class='box'>
    <el-form :model='dataFrom' class='box-from' :rules='rules' ref='from'>
      <p class='title'>后台管理</p>
      <el-form-item prop='userName'>
        <el-input v-model='dataFrom.userName' class='username-input' name='username' style='height: 47px' type='text'
                  tabindex='1' placeholder='请输入账号'>
          <template #prefix>
            <svg-icon icon='user' style='width: 17px;height: 19px;margin-left: 10px'></svg-icon>
            <!--            <img src='@/assets/user-i.png' alt='' style='width: 17px;height: 19px;margin-left: 10px'>-->
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop='password'>
        <el-input v-model='dataFrom.password' class='password-input' name='username' style='height: 47px'
                  type='password' tabindex='1' placeholder='请输入密码'>
          <template #prefix>
            <svg-icon icon='password' style='width: 17px;height: 19px;margin-left: 10px'></svg-icon>
            <!--            <img src='@/assets/pass-i.png' alt='' >-->
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model='checkPassword' label='记住密码' size='large' />
      </el-form-item>
      <el-form-item>
        <el-button type='primary' style='width: 100%;height: 40px;' @click='handleLogin(from)'>点击登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { login } from '@/store/user'

let userLogin = login()
let dataFrom = reactive({
  userName: '',
  password: ''
})
let checkPassword = ref(false)
let from = ref(null)
let rules = reactive({
  userName: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 12, message: '密码的长度为6 ~ 12 位', trigger: 'blur' }
  ]
})

onMounted(() => {
  checkPassword.value = JSON.parse(window.localStorage.getItem('checkPassword'))
  if (checkPassword.value) {
    dataFrom.userName = window.localStorage.getItem('username')
    dataFrom.password = window.localStorage.getItem('password')
  }

})

// 登录
function handleLogin(from) {
  from.validate((valid, fields) => {
    if (valid) {
      if (checkPassword.value) {
        window.localStorage.setItem('username', dataFrom.userName)
        window.localStorage.setItem('password', dataFrom.password)
        window.localStorage.setItem('checkPassword', JSON.stringify(checkPassword.value))
      }
      // 发送请求
      userLogin.getLogin({ username: dataFrom.userName.trim(), password: dataFrom.password.trim() }).then(res => {

      }).catch(err => {

      })
    } else {
      console.log('error submit!', fields)
    }
  })

}
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  height: 100%;
  background-color: #6b6a6a;
  display: flex;
  justify-content: center;
  align-items: center;

  .box-from {
    width: 400px;
    background-color: #fff;
    padding: 30px 30px 10px;
    border-radius: 10px;

    .title {
      text-align: center;
      margin-bottom: 30px;
    }
  }
}
</style>
