<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="menuConfig.bgColor"
        :text-color="menuConfig.textColor"
        :unique-opened="false"
        :active-text-color="menuConfig.activeTextColor"
        :collapse-transition="false"
        mode="vertical"
      >
        <div class="menu-wraper" v-for="(item,index) in menuList" :key="index">
          <el-submenu :index="item.path" v-if="item.children && item.children.length">
            <template slot="title">{{item.meta.title}}</template>
             <router-link :to="c_item.path">
              <el-menu-item :index="c_item.level" v-for="(c_item,c_index) in item.children" :key="c_index">
                {{c_item.meta.title}}
              </el-menu-item>
             </router-link>
          </el-submenu>
           <router-link :to="item.path" v-else>
              <el-menu-item :index="item.path">
                {{item.meta.title}}
              </el-menu-item>
           </router-link>
        </div>s
      </el-menu>
    </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  data () {
    return {
      menuConfig: {
        bgColor: '#393e46',
        textColor: '#eeeeee',
        activeTextColor: '#3f72af'
      }
    }
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
