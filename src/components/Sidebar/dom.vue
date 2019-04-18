<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="`#fff`"
        :text-color="`#303133`"
        :unique-opened="false"
        :active-text-color="`#409EFF`"
        :collapse-transition="false"
        mode="vertical"
      >
         <el-submenu :index="item.level" v-for="(item,index) in menuList" :key="index">
          <template slot="title">{{item.name}}</template>
          <el-menu-item :index="c_item.level" v-for="(c_item,c_index) in item.childern" :key="c_index"> 
            <router-link to="c_item.path">{{c_item.name}}</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      menuList: [{
        level: "0",
        name: "首页",
        path: "/index"
      },{
        level: "1",
        name: "测试",
        path: "/index",
        children: [{
          level: "1-1",
          name: "测试1",
          path: "/index",
        }]
      },{
        level: "2",
        name: "Learn",
        path: "/index"
      }],
      sidebar: {
        opened : true
      },
      timeList: []
    }
  },
  computed: {
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  mounted () {
    this.$http.get('/api/data').then((res) => {
      this.timeList = res.data.data || []
    })
  }
}
</script>
</script>

<style lang="less" scoped>
  @import "../../styles/sidebar.less";
  .scrollbar-wrapper{
      overflow-x: hidden !important;
  }
</style>
