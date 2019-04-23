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
         <el-submenu :index="String(item.meta.level)" v-for="(item,index) in menuList" :key="index">
          <template slot="title">{{item.meta.title}}</template>
          <el-menu-item :index="c_item.level" v-for="(c_item,c_index) in item.children" :key="c_index">
            <router-link :to="c_item.path">{{c_item.path}}</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      // 把 `this.menuList` 映射为 `this.$store.getters.permission_routes`
      menuList: 'permission_routes'
    }),
    activeMenu () {
      const route = this.$route
      const { path } = route
      // if set path, the sidebar will highlight the path you set
      return path
    },
    isCollapse () {
      return false
    }
  },
  mounted () {
    // this.$http.get('/api/data').then((res) => {
    //   this.timeList = res.data.data || []
    // })
  }
}
</script>

<style lang="less">
  @import "../../styles/sidebar.less";
</style>
