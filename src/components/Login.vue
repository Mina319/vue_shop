<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/panda.jpg" alt="" >
      </div>
      <!-- 登录表单区域 -->
       <!-- 登录表单区域 -->
       <el-form label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item >
          <el-input />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item >
          <el-input />
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
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
