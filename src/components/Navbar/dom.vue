<template>
    <div class="navbar">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item,index) in routerList"
          v-show="item.path"
          :key="index"
          :to="item.path">
            {{item.name}}
          </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      routerList: 'breadcrumb'
    })
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
