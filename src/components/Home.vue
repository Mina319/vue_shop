<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/panda.png" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width= "200px" >
        <!-- 侧边栏菜单区 -->
        <el-menu background-color="#313743" text-color="#fff"
        active-text-color="#02a0ff" unique-opened router :default-active="activePath" >
          <!-- 一级菜单 -->
          <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
            <!-- 一级菜单的模板区域 -->
          <template v-slot:title>
            <!-- 图标 -->
            <i :class="iconObjec[+item.id]"></i>
            <!-- 文本 -->
            <span>{{ item.authName }}</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item :index="'/' + subItem.path + ''" v-for="subItem in item.children"
          :key="subItem" @click="saveNavState('/' + subItem.path)">
            <template v-slot:title>
            <!-- 图标 -->
            <i class="el-icon-menu"></i>
            <!-- 文本 -->
            <span>{{ subItem.authName }}</span>
          </template>
          </el-menu-item>
        </el-submenu>
    </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
         <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  data () {
    return {
      // 左侧菜单数据
      menuList: [],
      iconObjec: {
        125: 'iconfont icon-user',
        103: 'iconfont icon-tijikongjian',
        101: 'iconfont icon-shangpin',
        102: 'iconfont icon-danju',
        145: 'iconfont icon-baobiao'
      },
      // 是否折叠
      // isCollapse: false
      // 被激活的链接地址
      activePath: ''
    }
  },
  created () {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath') || ''
  },
  methods: {
    logout () {
      // 清空token
      window.sessionStorage.clear()
      // 跳转登录页
      this.$router.push('/login')
    },
    // 获取所有的菜单
    async getMenuList () {
      const { data: res } = await this.$http.get('menus')
      // console.log(res)
      if (res.meta.status !== 200) return this.$message.error(res.meta.mesg)
      this.menuList = res.data || []
      // console.log(this.menuList)
    },
    // 点击按钮，切换菜单的折叠与展开
    // toggleCollpse () {
    //   this.isCollapse = !this.isCollapse
    //   console.log(this.isCollapse)
    // },
    // 保存链接的激活状态
    saveNavState (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }

  }
}

</script>

<style lang="less" scoped>
.home-container{
  height: 100%;
}

.el-header{
  background-color: #363d40;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside{
  background-color: #313743;
  .el-menu{
    border-right: none;
  }
}
.el-main{
  background-color: #e9edf1;
}
.iconfont{
  margin-right: 10px;
}
.toggle-button{
  background-color: #4A5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
