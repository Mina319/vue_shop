<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 搜索与添加区域 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容">
          <template v-slot:append>
            <el-button icon="el-icon-search"></el-button>
          </template>
        </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
      <!-- 用户列表区-->
      <el-table :data="userList" border stripe>
        <el-table-column type="index" ></el-table-column>
        <el-table-column prop="username" label="姓名" ></el-table-column>
        <el-table-column prop="email" label="邮箱" ></el-table-column>
        <el-table-column prop="mobile" label="电话" ></el-table-column>
        <el-table-column prop="role_name" label="角色" ></el-table-column>
        <el-table-column label="状态" >
          <template v-slot="scope">
            <div v-if="scope.row">
              <!-- {{ scope.row }} -->
              <el-switch v-model="scope.row.mg_state">
              </el-switch>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180px">
          <template v-slot="scope">
            <div v-if="scope.row">
              <!-- 修改按钮 -->
              <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
              <!-- 删除按钮 -->
              <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
              <!-- 分配角色 -->
              <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
              <!-- <el-tooltip effect="dark" content="分配角色" placement="top">
                <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
              </el-tooltip> -->
            </div>
          </template>
        </el-table-column>

      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      // 获取用户列表参数对象
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 2
      },
      userList: [],
      // 总数据条数
      total: 0
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    async getUserList () {
      const { data: res } = await this.$http.get('users', { params: this.queryInfo })
      if (res.meta.status !== 200) {
        return this.$message.error('获取用户列表失败：' + res.meta.msg)
      }
      this.userList = res.data.users
      this.total = res.data.total
      // console.log(this.userList)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
