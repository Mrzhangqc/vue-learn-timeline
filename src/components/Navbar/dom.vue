<template>
    <div class="navbar">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item,index) in routerList" 
          v-show="item.path"
          :key="index" 
          :to="{ path: item.path }">
            {{item.name}}
          </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => {
    return {
      routerList: [{
        path: '/',
        name: '首页'
      },{
        path: '',
        name: '活动管理'
      },{
        path: '',
        name: '活动列表'
      },{
        path: '',
        name: '活动详情'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
  .navbar{
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);

    .el-breadcrumb{
      line-height: 50px;
    }
  }
</style>
