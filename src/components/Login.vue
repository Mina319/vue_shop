<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" >
      </div>
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
      img {
        width: 100%;
        height: 100%;
      }
    }
}
</style>
