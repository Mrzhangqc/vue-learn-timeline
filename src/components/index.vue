<template>
  <div class="index">
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <div class="fixed-header">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar/dom.vue'
import Navbar from './Navbar/dom.vue'
import AppMain from './AppMain/dom.vue'

export default {
  name: 'index',
  components: {
    Sidebar,
    Navbar,
    AppMain
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .index{
    margin: 0;
    padding: 0;
  }
</style>
