<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/panda.jpg" alt="" >
      </div>
       <!-- 登录表单区域 -->
       <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user" placeholder="用户名"/>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" prefix-icon="iconfont icon-3702mima" placeholder="密码"/>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
    // 这是登录表单的数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 这时表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    //  点击重置按钮，重置登录表单
    resetLoginForm () {
      // console.log(this) // 打印实例
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(async valid => {
        // valid是验证结果，通过rules则返回true
        // console.log(valid)
        if (!valid) return
        // data 解构为 res
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登录失败！')
        this.$message.success('登录成功！')
        // 1. 将登录成功之后的 token ，保存到客户端的 session 中
        //   1.1 项目中除了登录之外的其他API接口，必须在登录之后才能访问
        //   1.2 token 只能在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
        // console.log(res)
        window.sessionStorage.setItem('token', res.data.token)
        // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
        this.$router.push('home')
      })
    }
  }

}
</script>

<style lang="less" scoped>
.login_container{
  background-color: rgb(32, 78, 95);
  height: 100%;
}

.login_box{
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);

    .avatar_box {
      width: 130px;
      height: 130px;
      border: 1px solid #9ba45f;
      border-radius: 50%;
      overflow: hidden;  // 确保超出边界的部分被隐藏, 因为图片遮住了父元素avatar_box
      padding: 10px;
      // x 偏移量 | y 偏移量 | 阴影模糊半径 | 阴影颜色
      box-shadow: 0 0 20px #9ba45f;
      position: absolute;
      // 将 .avatar_box 元素的 左边缘 移动到它的父容器宽度的 50% 处。
      left: 50%;
      // 将元素向左移动 自身宽度的 50%
      // transform: translate(-50%); 也可以写成下面的
      translate: -50% -50%; // 表示沿着x轴平移
      background-color: #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
}

.btns{
  // 靠右对齐
  // flex该元素的行为类似块级元素并且根据弹性盒模型布局它的内容。
  display: flex; // 启动了弹性布局模式
  // justify-content 属性定义浏览器如何沿着弹性容器的主轴和网格容器的行向轴分配内容元素之间和周围的空间。
  // flex-end 从行尾位置开始排列
  justify-content: flex-end;
}
</style>
