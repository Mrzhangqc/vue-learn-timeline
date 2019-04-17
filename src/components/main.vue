<template>
  <div class="main">
    <h2>{{msg}}</h2>
    <div class="block">
      <el-timeline>
        <el-timeline-item v-for="(item,index) in timeList" :key="index"  timestamp="item.date" placement="top">
          <el-card>
            <h4><router-link :to="item.path">{{item.name}}</router-link></h4>
            <p>{{item.desc}} {{ item.date}} {{item.time}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: 'Learn Timline',
      timeList: []
    }
  },
  mounted () {
    this.$http.get('/api/data').then((res) => {
      this.timeList = res.data.data || []
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .main{
    margin: 0;
    padding: 0 40px;
    h2{
      text-align: center;
      color: #fff;
      margin: 0;
    }
    .block .el-card{
      opacity: 0.65;
    }
  }
</style>
